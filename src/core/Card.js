import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import { addItem, updateItem, removeItem } from "./cartHelpers";

import moment from 'moment';

const Card = ({ product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => {

    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 mri">
            View Product

          </button>
        </Link>
      )

    );

  };

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });

  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (showAddToCartButton) => {
    return showAddToCartButton && (
      <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 mri " >
        Add to Cart
      </button>
    );

  };

  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  // const showRemoveButton = showRemoveProductButton => {
  //   return (
  //     showRemoveProductButton && (
  //       <button
  //         onClick={()=>removeItem(product._id)}
  //         className="btn btn-outline-danger mt-2 mb-2"
  //       >
  //         Remove Product
  //       </button>
  //     )
  //   );
  // };

  const showStock = (quantity) => {
    return (

      quantity > 0 ? <span className="badge rounded-pill bg-success text-white">In Stock</span> : <span className="badge rounded-pill bg-danger text-white">Out of Stock</span>);

  };
  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  // const handleChange = productId => event => {


  //   setCount(event.target.value < 1 ? 1 : event.target.value);
  //   if (event.target.value >= 1) {
  //     updateItem(productId, event.target.value);
  //   }
  // };





  const showCartUpdateOptions = cartUpdate => {
    return cartUpdate && (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Adjust Quantity</span>
          </div>

          <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
        </div>
      </div>
    )

  };

  return (



    <div className="card h-100 shadow">
      <div className="card-header bg-success text-white fw-bold">
        {product.name}
      </div>


      <div className="card-body">
        {shouldRedirect(redirect)}

        <ShowImage item={product} url="product" />
      

        <p className="lead mt-2 ">{product.description.substring(0, 100)}...</p>
        <h3 style={{ color: "green" }}>${product.price}</h3>
        <p className="fs-4">Category: {product.category && product.category.name}</p>
        <p >Added on {moment(product.createdAt).fromNow()}</p>



        {showStock(product.quantity)}
        <br />


        {showViewButton(showViewProductButton)}

        {showAddToCart(showAddToCartButton)}
        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}






      </div>
    </div>



  );
};

export default Card;
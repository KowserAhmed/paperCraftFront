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
        <Link to={`/product/${product._id}`} className="mr-2 mb-0">
          <button style={{borderRadius: "3px"}} className="btn btn-info mt-2 mb-0 mr-5 py-2 px-3">
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
      <button onClick={addToCart} style={{borderRadius: "3px"}} className="btn btn-success mt-2 mb-0  py-2 px-3" >
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
          style={{borderRadius: "3px"}} className="btn btn-danger mt-2 mb-0  py-2 px-3"
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

      quantity > 0 ? <span className="badge rounded-pill bg-success text-white  mt-1">In Stock</span> : <span className="badge rounded-pill bg-danger text-white mt-1">Out of Stock</span>);

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
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Adjust Quantity</span>
          </div>

          <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
        </div>
      </div>
    )

  };

  return (
    // Krishivai
    <div className="rounded card-shadow bg-light">
      <div style={{paddingBottom:"0px"}}  className="px-3 pt-3 m-0">
      <ShowImage  item={product} url="product" />
      </div>
      <div style={{paddingTop:"0px"}} className="card-body" >
        {shouldRedirect(redirect)}

       
        <div className="card-title fw-bold fs-4 m-0 p-0">
        {product.name}
         </div>
        <h4 className="m-0 p-0" style={{ color: "green" }}><span style={{fontSize:"30px"}}>৳</span>{product.price}</h4>
        <p  className="fs-5 m-0 mt-1p-0">Category: {product.category && product.category.name}</p>
        <p  className="m-0 mt-1 p-0">Added on {moment(product.createdAt).fromNow()}</p>
        {showStock(product.quantity)}
        <br />
        {showViewButton(showViewProductButton)}

        {showAddToCart(showAddToCartButton)}
        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}






      </div>
    </div>








    // end



    // <div className="card h-100 shadow">
    //   <div className="card-header bg-success text-white fw-bold">
    //     {product.name}
    //   </div>


    //   <div className="card-body" >
    //     {shouldRedirect(redirect)}

    //     <ShowImage item={product} url="product" />


    //     <p className="lead mt-2 ">{product.description.substring(0, 50)}</p>
    //     <h3 style={{ color: "green" }}>TK {product.price}</h3>
    //     <p className="fs-4">Category: {product.category && product.category.name}</p>
    //     <p >Added on {moment(product.createdAt).fromNow()}</p>



    //     {showStock(product.quantity)}
    //     <br />


    //     {showViewButton(showViewProductButton)}

    //     {showAddToCart(showAddToCartButton)}
    //     {showRemoveButton(showRemoveProductButton)}

    //     {showCartUpdateOptions(cartUpdate)}

    //   </div>
    // </div>



  );
};

export default Card;
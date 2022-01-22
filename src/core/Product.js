import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <div
            className="container-fluid"
        >
            <div class="container">
            <h2 className='mt-5 mb-4'>Product Information</h2>
                <div class="row justify-content-md-center">
                    <div style={{marginLeft:"2px"}} class="col-5 mb-5">
                        
                        {product && product.description && <Card product={product} showViewProductButton={false} />}

                    </div>
                    <div style={{marginTop:"98px"}} class="col-4 p-5">
                        <Layout
                            description={product && product.description && product.description.substring(0, 1000)}
                        >
                        </Layout>
                    </div>
                </div>
            </div>

            <div className="container container-fluid">

            <h2 className="mb-4">
                    Related Product  </h2>
                <div className="row ">
                    {relatedProduct.map((p, i) => (

                        <div key={i} className="col-12 col-lg-4 col-md-6 mb-3">
                            <Card product={p} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;

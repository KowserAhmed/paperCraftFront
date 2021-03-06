import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import HowitWorks from './HowitWorks';
import HeadingSection from './HeadingSection';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);
    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);

            }
            else {
                setProductsBySell(data);
            }
        });


    };
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error);

            }
            else {
                setProductsByArrival(data);
            }
        });

    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <>
            <HeadingSection></HeadingSection>
            <Search />
            
           
            <div className='container container-fluid'>
               
                <h2 className="mb-4">
                    New Arrivals
                </h2>
                <div className="row">
                    {productsByArrival.map((product, i) => (

                        <div key={i} className="col-12 col-lg-4 col-md-6 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
                <h2 className="mb-4">
                    Best Sellers
                </h2>
                <div className="row">
                    {productsBySell.map((product, i) => (
                        <div key={i} className="col-12 col-lg-4 col-md-6 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <HowitWorks></HowitWorks>
        </>
    );
};
export default Home;
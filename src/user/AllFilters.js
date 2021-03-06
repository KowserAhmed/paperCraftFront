import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import Card from '../core/Card';
import { getCategories, getFilteredProducts } from '../core/apiCore';
import Checkbox from '../core/Checkbox';
import RadioBox from '../core/RadioBox';
import { prices } from '../core/fixedPrices';


const AllFilter = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });


    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const [limit, setLimit] = useState(4);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResult = (newFilters) => {

        //     console.log(newFilters);

        getFilteredProducts(skip, limit, newFilters)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setFilteredResults(data.data);
                    setSize(data.size);
                    setSkip(0);
                }
            })
    };

    const loadMore = () => {

        //     console.log(newFilters);
        let toSkip = skip + limit;

        getFilteredProducts(toSkip, limit, myFilters.filters)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setFilteredResults([...filteredResults, ...data.data]);
                    setSize(data.size);
                    setSkip(toSkip);
                }
            })
    };

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        )

    }

    useEffect(() => {
        init();
        loadFilteredResult(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP",filters,filterBy);

        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === 'price') {

            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }

        loadFilteredResult(myFilters.filters);

        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }

        }
        return array;
    };


    return (



        <div className="col-9" style={{ marginTop: "20px" }}>
            <div className="row">

                <div className="col-4">
                <h4>Filter by categories</h4>
                <ul>
                    <Checkbox categories={categories} handleFilters={filters =>
                        handleFilters(filters, "category")
                    } />
                </ul>

                <h4>Filter by price range</h4>
                <ul>
                    <RadioBox prices={prices} handleFilters={filters =>
                        handleFilters(filters, "price")
                    } />
                </ul>

                </div>

            
           


            <div className='col-8'>
                <h2 className="mb-4">Select Trees</h2>
                <div className="row">
                    {filteredResults.map((product, i) => (
                        <div key={i} className="col-6 mb-3">
                            <Card product={product} />
                        </div>



                    ))}
                </div>
                <hr />
                {loadMoreButton()}
            </div>


            </div>

       
                

        </div>





    );
};
export default AllFilter;



import React, { useState, useEffect } from 'react';

import { getCategories, list } from './apiCore';
import Card from './Card';

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: '',
        search: '',
        results: [],
        searched: false
    });

    const {
        categories,
        category,
        search,
        results,
        searched } = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setData({ ...data, categories: data });
            }
        });


    };
    useEffect(() => {
        loadCategories()
    }, []);

    const searchData = () => {
        // console.log(search,category);

        if (search) {
            list({ search: search || undefined, category: category })
                .then(response => {
                    if (response.error) {
                        console.log(response.error);
                    }
                    else {
                        setData({ ...data, results: response, searched: true });
                    }
                })
        }
    };

    const searchSubmit = (e) => {
        e.preventDefault();
        searchData();

    };
    const handleChange = (name) => (event) => {
        setData({ ...data, [name]: event.target.value, searched: false });


    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found!`;
        }
    };

    const searchedProduct = (results = []) => {
        return (
            <div className='container-fluid'>
                <h2 className="mt-4 mb-4 text-success container-fluid">
                    {searchMessage(searched, results
                    )}
                </h2>
                <div className="row container-fluid">

                    {results.map((product, i) => (
                        <div className="col-4 mb-3">
                            <Card key={i} product={product} />
                        </div>

                    ))}

                </div>
            </div>

        );
    };
    const searchForm = () => {
        return (
            
            <form onSubmit={searchSubmit}>
                <span className="input-group-text p-0">
                    <div className="input-group">

                        <div className="input-group-prepend">
                            <select className="btn" style={{ borderRadius: "5px", marginRight: "10px" }} onChange={handleChange('category')}>
                                <option value="All">
                                    All
                                </option>
                                {categories.map((c, i) => (<option key={i} value={c._id}>{c.name}</option>))}
                            </select>

                        </div>

                        <input type="search" className="form-control" onChange={handleChange('search')}
                            placeholder="Search By Name"
                            style={{ borderRadius: "10px" }} />

                    </div>

                    <div className="btn input-group-append " style={{ border: 'none' }}>

                        <button className="input-group-text btn-outline-success">
                            Search
                        </button>

                    </div>
                </span>
                
            </form>
        );


    };

    return (
        <div className="roe">
            <div className="container mt-3 mb-3">
                {searchForm()}

            </div>
            <div className="container-fluid mt-3 mb-3">
                {searchedProduct(results)}

            </div>
        </div>

    );
};

export default Search;
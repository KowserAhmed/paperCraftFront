import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createRoof } from './apiUser';

import AllFilter from './AllFilters';

const CreateRoof = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        products: [],
        photo: '',
        loading: false,
        error: '',
        createdRoof: '',
        location:'',
        redirectToProfile: false,
        formData: ''
    });

    const { name,
        description,
        products,
        photo,
        loading,
        error,
        createdRoof,
        location,
        redirectToProfile,
        formData
    } = values;


    const { user, token } = isAuthenticated();

    useEffect(() => {
        setValues({
            ...values,
           formData: new FormData()
        });

    }, []);

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });

    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });


        createRoof(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({
                        ...values,
                        name: '',
                        description: '',
                        photo: '',
                        location:'',
                        loading: false,
                        createdRoof: data.name
                      
                    });
                }
            });

    };

    const newPostForm = () => (
        
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Roof Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className='text-muted'>Roof Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />

            </div>
            <div className="form-group">
                <label className='text-muted'>Roof Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />

            </div>
            <div className="form-group">
                <label className='text-muted'>Location</label>
                <input onChange={handleChange('location')} type="text" className="form-control" value={location} />

            </div>
           
        

            <button className="btn btn-outline-primary mt-3">Create Rooftop</button>

            

        </form>

    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : "none" }}>
            {error}

        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdRoof ? '' : "none" }}>
            <h2>Roof {`${createdRoof}`} is created!</h2>

        </div>
    )
    const showLoading = () => (
        loading && (<div className="alert alert-success">
            <h2>Loading...</h2>
        </div>)
    )


    return (
        <Layout title="Add a new Roof" description={`G'day ${user.name}, ready to add a new Roof?`} className='container'>
            <div className="row">

                <div className="col-md-3">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    

                  
                </div>
                <AllFilter/>
            </div>
            
            

        </Layout>
    );

}

export default CreateRoof;
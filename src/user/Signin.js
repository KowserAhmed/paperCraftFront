import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin, authenticate, isAuthenticated } from "../auth";
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

const Signin = () => {
    const [values, setValues] = useState({
        email: "admin@gmail.com",
        password: "123456",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpForm = () => (
        <Container >
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                <h2 className='sign-in ml-0'>Sign In</h2>
                <Form onSubmit={clickSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleChange("email")}
                            className='input-border'
                            style={{backgroundColor:"#e9fce9"}}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handleChange("password")}
                            className='input-border'
                            style={{backgroundColor:"#e9fce9"}}
                        ></Form.Control>
                    </Form.Group>

                    <Button onClick={clickSubmit} className='but bounce-in-top mt-2' type="submit" variant="primary" style={{ backgroundColor: '#3CA861', borderRadius: '5px' }}>
                        Signin
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
        
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (

            <Spinner
                animation="border"
                variant="success"
                role="status"
                style={{ width: "40px", height: "40px", margin: "auto", display: 'block' }}
            >
            </Spinner>


        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <div className="container col-md-8 offset-md-2 mt-5" >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </div>
    );
};

export default Signin;

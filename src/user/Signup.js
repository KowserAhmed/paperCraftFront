import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                <h2 className='sign-in ml-0'>Sign Up</h2>
                <Form onSubmit={clickSubmit}>
                 <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleChange('name')}
                            className='input-border'
                            style={{backgroundColor:"#e9fce9"}}
                        ></Form.Control>
                    </Form.Group>
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
                        SignUp
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    );

    const showError = () => (
        <Container>
             <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
        <div className="alert alert-danger mt-3 justify-content-md-center" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
        </Col>
             </Row>
        </Container>
    );

    const showSuccess = () => (
        <div className="alert alert-info mt-3" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <div className="container col-md-8 offset-md-2 mt-5" >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </div>
    );
};

export default Signup;

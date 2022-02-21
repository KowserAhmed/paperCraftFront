import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated, authenticate } from "../auth";
import { RiShoppingCartFill } from "react-icons/ri";
import { Fragment } from 'react';
import { itemTotal } from "./cartHelpers";
import Search from './Search';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import TopHeader from './TopHeader'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: "tomato",
            fontSize: "20px"

        };
    } else return { color: 'green', fontSize: "20px" }

}
const font = () => {
    return {
        fontFamily: "'Caveat', cursive",
        color: "green",
        fontSize: "25px"

    }

}


const Menu = ({ history }) => {
    return (

        <div>
            <div>
                <TopHeader></TopHeader>
            </div>
            <Navbar bg="light" expand="lg">

                <Container fluid>
                    <Navbar.Brand style={font()} href="/"> <span style={{ margin: "0px" }}><i className="fab fa-pagelines"></i></span> Green City</Navbar.Brand>
                    <div>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav
                            className="me-auto"

                        >

                            <Nav.Link style={isActive(history, "/")} href="/">Home</Nav.Link>
                            <Nav.Link style={isActive(history, "/shop")} href="/shop">Shop</Nav.Link>
                            <Nav.Link style={isActive(history, "/cart")} href="/cart"><RiShoppingCartFill />
                                <sup><small className="cart-badge">{itemTotal()}</small></sup></Nav.Link>
                                <Nav.Link style={isActive(history, "/about")} href="/about"> <span style={{fontSize:"15px"}}><i className="fas fa-address-card"></i></span> About Us</Nav.Link>

                            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                <Nav.Link style={isActive(history, "/user/dashboard")} href="/user/dashboard">Dashboard</Nav.Link>
                            )}
                            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                <Nav.Link style={isActive(history, "/admin/dashboard")} href="/admin/dashboard">Dashboard</Nav.Link>
                            )}

                            {!isAuthenticated() && (
                                <Fragment>
                                    <Nav.Link style={isActive(history, "/signin")} href="/signin">Signin</Nav.Link>
                                    <Nav.Link style={isActive(history, "/signup")} href="/signup">Signup</Nav.Link>

                                </Fragment>
                            )}

                            {isAuthenticated() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <span className="nav-link" style={{ cursor: 'pointer', color: 'green', fontSize: "20px" }} onClick={() => signout(() => {
                                            history.push('/')
                                        })}>Signout</span>
                                    </li>
                                </Fragment>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            </div>
    );

};


export default withRouter(Menu);
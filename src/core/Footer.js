import React from "react";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div fluid className='pt-5 mt-5'>
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="https://www.facebook.com/hasibulhasan.shanto.5494/" className="mx-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/hasibul-hasan-shanto-b19b41207/" className="mx-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Shantovai23" className="mx-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem mx-3"></i>Greencity.bd
                  </h6>
                  <p>
                    Green city is an online e-commerce platform.Where we sell our products like fruits,vegetable and trees these are 100% organic.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Vegetables
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                     Fruits
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Trees
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="/signin" className="text-reset">
                      Login
                    </Link>
                  </p>
                  <p>
                    <Link to="/about" className="text-reset">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link to="/help" className="text-reset">
                      Help
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact with Us</h6>
                  <p>
                    <i className="fas fa-home mx-3"></i>Dhaka,Bangladesh
                  </p>
                  <p>
                    <i className="fas fa-envelope mx-3"></i>
                    greencity@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mx-3"></i> 01402367792
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <Link className="text-reset fw-bold" to="/">
              Greencity.bd
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import { Row,Col,Button ,Container, NavDropdown } from "react-bootstrap";
import founder from "../image/roof.png"
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"

const About = () => {
  const [modalShow, setModalShow] = React.useState(false);
    

    return (

        

<Container className="py-3 my-3">
      <h2 className="founder text-center works-text">
        What is Green City.bd ?{" "}
      </h2>
      <Row className='mt-5'>
        <Col className='mt-4 ' sm={12} md={6} lg={6} xl={6}>
          <img
            src={founder}
            alt="founder-pic"
            className="founder-img img-fluid"
            style={{borderRadius:"10px 50px", marginTop:"0px"}}
          />
         
         <Button variant="success" onClick={() => setModalShow(true)} className='founder-btn'>
            About Founder and Developer
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <p className="about-krishi lead">
            Green City.bd is a online local digital platform.Where we sell our
            products like fruits,vegetable and trees these are 100% organic.You
            can order your products through our website,then we will reach you.
            You can pay with PayPal.We are 100% trusted to our cutomers.In this pandamic situation to go market
            and buy daily needed products like vegetables and fruits ,its very
            risky for us.So our Founder and Developer Hasibul Hasan, Mujahidul Islam and Kowser Ahmed
            developed this beautiful website where people like us buy their
            daily needed vegetables and fruits,not only these products you can
            buy beautiful flower tress from Green City.bd.These products are
            extremely fresh.
          </p>
        </Col>
      </Row>
    </Container>
   
    );
};
export default About;
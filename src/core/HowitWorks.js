import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const HowitWorks = () => {
  return (
    <Container className='py-4 my-2  text-center'>
     <h2 className='text-center works-text'>HOW IT WORKS</h2>
      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <div>
            <i class="fas fa-praying-hands icons"></i>
          </div>
          <div>
            <h5>100% ORGANIC</h5>
          </div>
          <div>
           
            <p className="leads">
              We are promise to provide 100% organic products
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <div>
            <i class="fas fa-weight-hanging icons"></i>
          </div>
          <div>
            <h5>NO ORDER LIMIT</h5>
          </div>
          <div>
       
            <p className="leads">
              we have no order limits.You can buy as much as you want.
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <div>
            <i class="fas fa-truck icons"></i>
          </div>
          <div>
            <h5>FAST DELIVERY</h5>
          </div>
          <div>
       
            <p className="leads">
              Our Team has excellent on time delivery experience.
            </p>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6} xl={3}>
          <div>
          <i class="fas fa-hands-helping icons"></i>
          </div>
          <div>
            <h5>TRUSTED</h5>
          </div>
          <div>
       
            <p className="leads">
             You can trust us as like your mother.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowitWorks;

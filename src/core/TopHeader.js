import React from 'react'
import {Container,Row,Col, Nav} from "react-bootstrap";
const TopHeader = () => {
    return (
        <div className='top-header-color'>
        <Container fluid>
        <Row>
          <Col>
              <Nav.Link>
              <div className="call-color"> <i className="fas fa-phone-alt call"></i>+8801402367792 Call Now</div>
              </Nav.Link>
          </Col>
          <Col>
          <Nav.Link>
          <div className="mail-color"> <i className="fas fa-envelope mail"></i>support@gmail.com</div>
          </Nav.Link>
          </Col>
        </Row>
      </Container>
      </div>
    )
}

export default TopHeader

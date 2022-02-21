import { Modal, Button, Row, Col } from 'react-bootstrap'
import founder1 from "../image/Hasibul.png";
import founder2 from "../image/Mujahid.png";
import founder3 from "../image/Kowser.jpg";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Team PIXEL3

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Row className='mt-5 ms-3 me-3'>
          <Col sm={12} md={4} lg={4} xl={4}>
            <div>
              <h4 className='text-center'>Hasib</h4>
              <img style={{
              height: "250px", display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }} src={founder1} alt="" />
            </div>




          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <h4 className='text-center'>Mujahid</h4>
            <img style={{
              height: "250px", display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }} src={founder2} alt="" />

          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <h4 className='text-center'>Kowser</h4>
            <img style={{
              height: "250px", display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }} src={founder3} alt="" />

          </Col>
        </Row>

        <h5 className='modal-text'>EU Team PIXEL3</h5>
        <h5 className='modal-text'>Eastern University,Bangladesh</h5>
        <h6 className='modal-text-email'>Email : mernstack23@gmail.com</h6>
        <h6 className='modal-text'>Quotes from our Founder :</h6>
        <p style={{ fontStyle: 'italic' }}>
          The two important things that I did learn were that you are as powerful and strong as you allow yourself to be, and that the most difficult part of any endeavour is taking the first step, making the first decision.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger' style={{ borderRadius: '5px' }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
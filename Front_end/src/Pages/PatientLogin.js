import { Modal, Button, Container, Form, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import { PatientNav, Signup, Login } from '../Components/ComponentIndex'

export const PatientLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container className="App">
      <PatientNav />
      <h1>Patient Login</h1>
      <Button variant="primary" className='btn-lg' onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <Tabs defaultActiveKey="login">
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
             <Signup />
            </Tab>
          </Tabs>
        </Modal.Body>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
      </Modal>
    </Container>
  );
};

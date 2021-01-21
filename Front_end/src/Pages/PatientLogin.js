import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import { PatientAndDocNav, Signup, Login } from '../Components/ComponentIndex'
import Patient from '../img/patient-home.PNG'
import '../style/patientHome.css'

export const PatientLogin = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(true)

  const handleClose = () => setShow(false);
  const handleShowL = () => {
    setShow(true)
    setActiveTab(true)
  };
  const handleShowS = () => {
    setShow(true)
    setActiveTab(false)
  };

  return (
    <div className="home-login">
      <PatientAndDocNav handleShowL={handleShowL} handleShowS={handleShowS} />
      <div className="light-blue">BETTER PATIENT CARE</div>
      <div className="little-blue-container">
        <div className="blue-text-patient">Don't take half a day to go to the doctor</div>
      </div>
      <div className="white-container-patient">
        <img src={Patient} />
        <div className="white-text">
          DocO'clock is an application that uses artificial intelligence to optimize the process of scheduling an appointment and going to the doctor. Our idea is that you will not need to take half of your day off just to go to the doctor. The goal is that you will be exam by a doctor in last then 15 min wait! Join our platform to change your medical experience!
        </div>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <Tabs defaultActiveKey={activeTab ? "login" : "signup"}>
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

    </div>
  );
};

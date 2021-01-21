import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import { PatientAndDocNav, Signup, Login } from '../Components/ComponentIndex'
import Doc from '../img/doc-page.PNG'
import '../style/drHome.css'

export const DrLogin = () => {
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
            <img className="img-doc" src={Doc} />
            <div className="dark-blue-text-doc">
                <div >AI optimization for medical scheduling</div>
            </div>
            <div className="light-blue-container-doc">
                <div className="light-blue-text">
                    DocO'clock is an application that uses artificial intelligence to optimize the process of scheduling an appointment. You can see the likelihood that the patient will show up in time and make your time more efficient to help the maximum amount of patient.
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

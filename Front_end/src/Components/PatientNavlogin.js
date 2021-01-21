import { Navbar, Nav } from "react-bootstrap";

export const PatientNavLogin = () => {
    return (
        <Navbar className="shadow-sm" bg="white">
            <div className="container">
                <div>
                    <a href="/patienthome"><img src="https://firebasestorage.googleapis.com/v0/b/pet-adoption-will.appspot.com/o/dococlock%2Flogo.png?alt=media&token=4564c918-b493-4b17-b893-f6d76c988047" width="64" height="64" />
                    </a>
                </div>
                <div className="d-flex">
                    {/* <Nav.Link href="/patienthome">Home</Nav.Link> */}
                    <Nav.Link href="/updatepatient">Update profile</Nav.Link>
                    <Nav.Link href="/createAppointment" >New appointment </Nav.Link>
                </div>
            </div>
        </Navbar>
    );
};
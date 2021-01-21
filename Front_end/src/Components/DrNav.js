import { Navbar, Nav } from "react-bootstrap";

export const DrNav = () => {
  return (
    <Navbar className="shadow-sm" bg="white">
      <div className="container">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/pet-adoption-will.appspot.com/o/dococlock%2Flogo.png?alt=media&token=4564c918-b493-4b17-b893-f6d76c988047" width="64" height="64" />
          <Navbar.Brand href="/">Doc-o-clock</Navbar.Brand>
        </div>
        <div className="d-flex">
          {/* <Nav.Link href="/drhome">Home</Nav.Link> */}
          <Nav.Link href="/updatedr">Update profile</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

// mr-auto justify-content-center patient-nav

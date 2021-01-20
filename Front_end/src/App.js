import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import { Home, DrLogin, PatientLogin, AdminDash, PatientHome, UpdatePatient, UpdateDr } from "./Pages/PageIndex";
=======
import { Home, DrLogin, PatientLogin, AdminDash, PatientHome, DrHome } from "./Pages/PageIndex";
>>>>>>> fc195ec4a0ff7ac4904eb996c127197729d72937

function App() {
  return (
    <Container>
      <Router>
        <Switch>
<<<<<<< HEAD
        <Route path="/updatedr">
            <UpdateDr />
          </Route>
        <Route path="/updatepatient">
            <UpdatePatient />
          </Route>
        <Route path="/admindash">
=======
          <Route path="/admindash">
>>>>>>> fc195ec4a0ff7ac4904eb996c127197729d72937
            <AdminDash />
          </Route>
          <Route path="/patientlogin">
            <PatientLogin />
          </Route>
          <Route path="/patienthome">
            <PatientHome />
          </Route>
          <Route path="/drhome">
            <DrHome />
          </Route>
          <Route path="/drlogin">
            <DrLogin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

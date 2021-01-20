import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, DrLogin, PatientLogin, AdminDash, PatientHome, UpdatePatient, UpdateDr, DrHome } from "./Pages/PageIndex";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/updatedr">
            <UpdateDr />
          </Route>
          <Route path="/updatepatient">
            <UpdatePatient />
          </Route>
          <Route path="/admindash">
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

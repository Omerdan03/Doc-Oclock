import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { Home, DrLogin, PatientLogin, AdminDash, PatientHome, UpdatePatient, UpdateDr, MakeApp, DrHome, AppointmentPage, PatientPage } from "./Pages/PageIndex";

import "./App.css";

function App() {
  return (
    // <Container>
    <Router>
      <Switch>
        <Route path="/makeapp">
          <MakeApp />
        </Route>
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
        <Route path="/appointment/:id" component={AppointmentPage} />
        <Route path="/patient/:id" component={PatientPage} />
      </Switch>
    </Router>

    // </Container>
  );
}

export default App;

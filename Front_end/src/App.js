import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, DrLogin, PatientLogin, PatientHome, UpdatePatient, UpdateDr, DrHome } from "./Pages/PageIndex";
import CreateAppointment from "./Components/CreatAppointments";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/updatedr">
            <UpdateDr />
          </Route>
          <Route path="/updatepatient">
            <UpdatePatient />
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
          <Route path="/createAppointment">
            <CreateAppointment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

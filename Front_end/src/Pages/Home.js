import { Container } from "react-bootstrap";
import { DrNav } from "../Components/ComponentIndex";

export const Home = () => {
  return (
    <Container className="App">
      <DrNav />
      <h1>Doc-o-clock</h1>
      <h2>I'm a</h2>
      <a href="/patientlogin" className="btn btn-primary btn-lg">
        Patient
      </a>
      <a href="/drlogin" className="btn btn-primary btn-lg">
        Doctor
      </a>
    </Container>
  );
};

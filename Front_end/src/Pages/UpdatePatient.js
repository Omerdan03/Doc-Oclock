import { Container } from "react-bootstrap";
import { PatientForm, PatientNav } from "../Components/ComponentIndex";

export const UpdatePatient = () => {
  return (
    <Container>
      <PatientNav />
      <h1>Update personal profile</h1>
      <PatientForm />
    </Container>
  );
};

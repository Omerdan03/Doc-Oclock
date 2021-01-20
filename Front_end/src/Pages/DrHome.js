import { ListTreatments } from "../Components/ListTreatments";
import { Container } from "react-bootstrap";
import { ListPatients } from "../Components/ListPatients";

export const DrHome = () => {
  // request to api based on patient_id
  return (
    <Container>
      <h1>Doctor Home</h1>
      <ListTreatments items="" />
      <ListPatients items="" />
    </Container>
  );
};

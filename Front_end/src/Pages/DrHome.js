import { ListTreatments } from "../Components/ListTreatments";
import { Container } from "react-bootstrap";
import { ListPatients } from "../Components/ListPatients";
import { DocNav } from "../Components/ComponentIndex";

export const DrHome = () => {
  // request to api based on patient_id
  return (
    <Container>
      <DocNav />
      <h1>Doctor Home</h1>
      <ListTreatments items="" />
      <ListPatients items="" />
    </Container>
  );
};

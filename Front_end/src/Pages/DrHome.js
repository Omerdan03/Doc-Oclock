<<<<<<< HEAD
import { DrNav } from '../Components/ComponentIndex'
import { Container } from 'react-bootstrap'

export const DrHome = () => {
    return(
    <Container>
        <h1>Doctor Home</h1>
        <DrNav />
    </Container>
    )

}
=======
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
>>>>>>> fc195ec4a0ff7ac4904eb996c127197729d72937

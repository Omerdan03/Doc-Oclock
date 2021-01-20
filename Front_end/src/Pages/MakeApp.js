import { Container } from "react-bootstrap";
import { AppForm } from "../Components/ComponentIndex";

export const MakeApp = () => {
  return (
    <Container>
      <h1>Schedule your appointment</h1>
      <AppForm />
    </Container>
  );
};

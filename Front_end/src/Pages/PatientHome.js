import { ListAppointments } from "../Components/ListAppointments";
import { Container } from "react-bootstrap";
import { DocNav } from "../Components/DocNav";

export const PatientHome = () => {
  // request to api based on patient_id
  const mockAppointments = [
    {
      datetime_schedule: Date.now(),
      doctor_fullname: "Jane Fox",
      doctor_specialty: "Primary Care",
      location: "8582 Leeton Ridge Lane Henderson, KY 42420",
      status: "approved",
    },
    {
      datetime_schedule: Date.now(),
      doctor_fullname: "Jane Fox",
      location: "752 Carriage Street Pembroke Pines, FL 33028",
      status: "approved",
    },
    {
      datetime_schedule: Date.now(),
      doctor_fullname: "Jane Fox",
      location: "976 Sleepy Hollow Ave. Mobile, AL 36605",
      status: "approved",
    },
    {
      datetime_schedule: Date.now(),
      doctor_fullname: "Jane Fox",
      location: "138 Shirley Street Long Branch, NJ 07740",
      status: "pending",
    },
  ];
  return (
    <Container>
      <DocNav />
      <h1>Patient Home</h1>
      <ListAppointments items={mockAppointments} />
    </Container>
  );
};

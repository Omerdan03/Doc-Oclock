import { ListTreatments } from "../Components/ListTreatments";
import { Container } from "react-bootstrap";
import { ListPatients } from "../Components/ListPatients";
import { DrNav } from "../Components/ComponentIndex";

export const DrHome = () => {
  // request to api based on patient_id
  const mockTreatments = [
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_symptoms: "",
      patient_gender: "m",
      patient_age: "35",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
    },
  ];

  const mockPatients = [
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_symptoms: "",
      patient_gender: "m",
      patient_age: "35",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
    },
  ];
  return (
    <Container>
      <DrNav />
      <h1>Doctor Home</h1>

      <h2>My Treatments</h2>
      <ListTreatments items={mockTreatments} />

      <h2>My Patients</h2>
      <ListPatients items={mockPatients} />
    </Container>
  );
};

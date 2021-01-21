import { ListAppointments } from "../Components/ListAppointments";
import { Container } from "react-bootstrap";
import { DrNav } from "../Components/DrNav";
import axios from "axios";

export const PatientHome = () => {
  // request to api based on patient_id

  const handleSubmit = e => {
    e.preventDefault();
    const result = axios.post("http://localhost:5000/api/register-patient", {
      headers: {
        // "auth-token": localStorage.getItem("UserToken"),
        data: {
          fullName: "Mr. Test User",
          phone: "999000000",
          email: "test@test.test",
          birthDay: "31-12-2021",
          gender: "m",
          location: "8582 Leeton Ridge Lane Henderson, KY 42420",
          maritalStatus: "married",
          password: "test@test.test",
        },
      },
    });

    console.log(result);
  };

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
      <DrNav />
      <h1>Patient Home</h1>
      <ListAppointments items={mockAppointments} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Register Fake User</button>
      </form>
    </Container>
  );
};

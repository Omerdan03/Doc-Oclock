import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function CreateAppointment() {
  const [appointmentsArray, setAppointmentsArray] = useState([]);

  useEffect(async () => {
    const appointments = await axios.get(
      "http://localhost:5000/api/all-appointments",
      {
        headers: {
          "auth-token": localStorage.getItem("UserToken"),
        },
      }
    );
    setAppointmentsArray(appointments.data);
  }, []);

  const [specialty, setSpecialty] = useState("General");
  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const [date, setDate] = useState();
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const [reason, setReason] = useState();
  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const [APIResponse, setAPIResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAppointment = {
      specialty: specialty,
      date: date,
      reason: reason,
    };
    console.log(localStorage.getItem("UserToken"));
    const response = await axios.post(
      "http://localhost:5000/api/create-appointment",
      newAppointment,
      {
        headers: {
          "auth-token": localStorage.getItem("UserToken"),
        },
      }
    );

    if (response.status === 200) {
      setAPIResponse("Appointment Created Succesfully");
    }
  };

  const dateObj = {};

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group onChange={handleSpecialtyChange}>
          <Form.Label>Select the specialty</Form.Label>
          <Form.Control as="select">
            <option>General</option>
            <option>Cariologist</option>
            <option>Orthopedist</option>
            <option>Neurologist</option>
            <option>Gastric</option>
          </Form.Control>
        </Form.Group>
        <Form.Group onChange={handleDateChange}>
          <Form.Label>Select a desired date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group onChange={handleReasonChange}>
          <Form.Label>Tell us what you're feeling</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create appointment
        </Button>
      </Form>
      <p>{APIResponse}</p>
      This is the doctors current schedule:
      {appointmentsArray.map((appointment) => {
        let currentDate = new Date(
          appointment.requestedDate
        ).toLocaleDateString("en-GB");
        if (dateObj[currentDate]) {
          dateObj[currentDate] += 1;
        } else dateObj[currentDate] = 1;
      })}
      {Object.keys(dateObj).map((date) => {
        return (
          <div>
            {date}: {dateObj[date]} {dateObj[date] > 1 ? "consults" : "consult"}
          </div>
        );
      })}
    </div>
  );
}

export default CreateAppointment;

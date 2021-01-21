import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const DrForm = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    clinic_name: "",
    speciality: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    axios.put("http://localhost:3001/pet", input);
  };

  return (
    <Container>
      <div className="col-7 m-auto">
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control name="first_name" value={input.first_name} onChange={handleChange} type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control name="last_name" value={input.last_name} type="text" onChange={handleChange} placeholder="Enter last name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={input.email} type="email" onChange={handleChange} placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Clinic/hopsital name</Form.Label>
            <Form.Control name="clinic_name" value={input.clinic_name} onChange={handleChange} type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select speciality</Form.Label>
            <Form.Control name="speciality" as="select">
              <option>Allergy/immunology</option>
              <option>Anesthesiology</option>
              <option>Dermatology</option>
              <option>Diagnostic radiology</option>
              <option>Emergency medicine</option>
              <option>Family medicine</option>
              <option>Internal medicine</option>
              <option>Medical genetics</option>
              <option>Neurology</option>
              <option>Nuclear medicine</option>
              <option>Obstetrics and gynecology</option>
              <option>Ophthalmology</option>
              <option>Pathology</option>
              <option>Pediatrics</option>
              <option>Physical medicine and rehabilitation</option>
              <option>Preventive medicine</option>
              <option>Psychiatry</option>
              <option>Radiation oncology</option>
              <option>Surgery</option>
              <option>Urology</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Update profile</Button>
        </Form>
      </div>
    </Container>
  );
};

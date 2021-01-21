import { ListTreatments } from "../Components/ListTreatments";
import { Container } from "react-bootstrap";
import { ListPatients } from "../Components/ListPatients";
import { DrLoginNav } from "../Components/ComponentIndex";

export const DrHome = () => {
  // request to api based on patient_id
  const mockTreatments = [
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_symptoms: "",
      patient_gender: "m",
      patient_age: "35",
      status: "approved",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
      status: "approved",
    },
    {
      datetime_schedule: Date.now(),
      patient_fullname: "Derrick Conner",
      patient_gender: "m",
      patient_age: "35",
      status: "approved",
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
    <>
      <DrLoginNav />
      <Container>
        <div className="row mt-5">
          <div className="col-3">
            <h1>&nbsp;</h1>
            <h3 className="mt-5">&nbsp;</h3>
            <div className="list-group mt-3">
              <a href="/doctor/treatments" class="list-group-item list-group-item-action active" aria-current="true">
                My Treatments
              </a>
              <a href="/doctor/patients" className="list-group-item list-group-item-action">
                My Patients
              </a>
            </div>
          </div>
          <div className="col-9">
            <h1>Welcome Back, Mr. House</h1>
            <h3 className="text-secondary mt-5">Today's Treatments</h3>
            <ListTreatments items={mockTreatments} />

            <h3 className="text-secondary mt-5">Tomorrow</h3>
            <ListTreatments items={mockTreatments} />

            {/* <h2>My Patients</h2>
          <ListPatients items={mockPatients} /> */}
          </div>
        </div>
      </Container>
    </>
  );
};
import { ListAppointments } from '../Components/ListAppointments';

export const PatientHome = () => {
  // request to api based on patient_id
  return (
    <>
      <h1>Patient Home</h1>
      <ListAppointments items='' />
    </>
  );
};

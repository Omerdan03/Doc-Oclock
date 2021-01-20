export const SingleItemAppointment = ({ item }) => {
  const { datetime_schedule, status, location, doctor_fullname } = item;
  return (
    <div className="d-flex justify-content-start">
      <div>Time {datetime_schedule}</div>
      <div>
        <h4>DoctorName {doctor_fullname}</h4>
        <p>AppointmentInfo {location}</p>
        <p>Status(Pending/Approved) {status}</p>
      </div>
    </div>
  );
};

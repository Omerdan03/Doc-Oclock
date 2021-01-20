import Moment from "react-moment";


export const SingleItemAppointment = ({ item }) => {
  const { datetime_schedule, status, location, doctor_fullname } = item;
  return (
    <div className="d-flex justify-content-start">
      <div>
        <h4>
          {/* <Moment date={datetime_schedule} format="MMM Do, hh:mm A" /> */}
          <Moment date={datetime_schedule} format="hh:mm A" />
        </h4>
        <small>{status}</small>
      </div>
      <div>
        <h4>{doctor_fullname}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
};

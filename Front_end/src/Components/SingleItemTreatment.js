import Moment from "react-moment";
import { Link } from "react-router-dom";

export const SingleItemTreatment = ({ item }) => {
  const { patient_fullname, patient_gender, patient_age, patient_symptoms, datetime_schedule, status } = item;
  return (
    <Link to="/appointment/:id" className="single-item shadow-sm rounded-lg text-dark d-block">
      <div className="d-flex justify-content-start my-3 p-3">
        <div className="w-25 pl-2">
          <h4>
            <Moment date={datetime_schedule} format="D MMM" />
          </h4>
          <p>
            <Moment date={datetime_schedule} format="hh:mm A" />
          </p>
          <small className="text-success text-capitalize">{status}</small>
        </div>
        <div>
          <h4>
            {patient_fullname}
            <small>
              {patient_gender}, {patient_age}
            </small>
          </h4>
          <p className="text-secondary">{patient_symptoms || "No symptoms"}</p>
        </div>
      </div>
    </Link>
  );
};

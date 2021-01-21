import { Link } from "react-router-dom";

export const SingleItemPatient = ({ item }) => {
  const { patient_fullname, patient_gender, patient_age, patient_symptoms } = item;
  return (
    <Link to="/patient/a9sd8f7a9sd8fa9s" className="single-item shadow-sm rounded-lg text-dark d-block">
      <div className="d-flex justify-content-start   my-3 p-3">
        <div className="rounded-circle">DC</div>
        <div>
          <h4>
            {patient_fullname}{" "}
            <small className="text-secondary">
              {patient_gender}, {patient_age}
            </small>
          </h4>
          <p className="text-secondary">{patient_symptoms || "No symptoms"}</p>
        </div>
      </div>
    </Link>
  );
};

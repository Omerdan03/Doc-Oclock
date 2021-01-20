export const SingleItemTreatment = ({ item }) => {
  const { patient_fullname, patient_gender, patient_age, patient_symptoms, datetime_scheduled } = item;

  return (
    <div className="d-flex justify-content-start border rounded my-1">
      <div>{datetime_scheduled || "Time"}</div>
      <div>
        <h4>
          <a href="#appoinment_id">{patient_fullname}</a>
        </h4>
        <p>
          {patient_gender}, {patient_age}
        </p>
        <p>{patient_symptoms}</p>
      </div>
    </div>
  );
};

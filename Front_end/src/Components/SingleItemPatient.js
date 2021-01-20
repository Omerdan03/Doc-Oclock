export const SingleItemPatient = ({ item }) => {
  const { patient_fullname, patient_gender, patient_age, patient_symptoms } = item;

  return (
    <div className="d-flex justify-content-start border rounded my-1">
      <div>PatientAvatar</div>
      <div>
        <h4>
          <a href="#patient_id">{patient_fullname}</a>
        </h4>
        <p>
          {patient_gender}, {patient_age}
        </p>
        <p>{patient_symptoms}</p>
      </div>
    </div>
  );
};

import { SingleItemPatient } from "./SingleItemPatient";
import { Loader } from "./Loader";

export const ListPatients = ({ items }) => {
  // request to api based on doctor_id

  !items && <Loader />;
  return (
    items && (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemPatient key={index} item={item} />
        ))}
      </div>
    )
  );
};

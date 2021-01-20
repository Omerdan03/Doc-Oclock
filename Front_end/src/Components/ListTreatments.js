import { SingleItemTreatment } from "./SingleItemTreatment";
import { Loader } from "./Loader";

export const ListTreatments = ({ items }) => {
  // request to api based on doctor_id

  !items && <Loader />;
  return (
    items && (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemTreatment key={index} item={item} />
        ))}
      </div>
    )
  );
};

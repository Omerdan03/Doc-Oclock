import { SingleItemAppointment } from "./SingleItemAppointment";
import { Loader } from "./Loader";

export const ListAppointments = ({ items }) => {
  // request to api based on patient_id

  !items && <Loader />;
  return (
    items && (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemAppointment key={index} item={item} />
        ))}
      </div>
    )
  );
};

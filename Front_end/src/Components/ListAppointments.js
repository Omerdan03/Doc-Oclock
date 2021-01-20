import { SingleItemAppointment } from "./SingleItemAppointment";
import { Loader } from "./Loader";
import { EmptyState } from "./EmptyState";

export const ListAppointments = ({ items }) => {
  // request to api based on patient_id

  !items && <Loader />;
  return (
    (!items.length && <EmptyState area="appointments" />) || (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemAppointment key={index} item={item} />
        ))}
      </div>
    )
  );
};

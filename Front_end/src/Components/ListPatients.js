import { SingleItemPatient } from "./SingleItemPatient";
import { Loader } from "./Loader";
import { EmptyState } from "./EmptyState";

export const ListPatients = ({ items }) => {
  // request to api based on doctor_id

  !items && <Loader />;
  return (
    (!items.length && <EmptyState area="patients" />) || (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemPatient key={index} item={item} />
        ))}
      </div>
    )
  );
};

import { SingleItemTreatment } from "./SingleItemTreatment";
import { Loader } from "./Loader";
import { EmptyState } from "./EmptyState";

export const ListTreatments = ({ items }) => {
  // request to api based on doctor_id

  !items && <Loader />;
  return (
    (!items.length && <EmptyState area="treatments" />) || (
      <div className="itemsList">
        {items.map((item, index) => (
          <SingleItemTreatment key={index} item={item} />
        ))}
      </div>
    )
  );
};

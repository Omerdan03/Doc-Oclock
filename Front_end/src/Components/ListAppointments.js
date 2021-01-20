import { SingleItemAppointment } from './SingleItemAppointment';
import { Loader } from './Loader';

export const ItemsList = ({ items }) => {
  !items && <Loader />;
  return (
    items && (
      <div className='itemsList'>
        {items.map((item, index) => (
          <SingleItemAppointment key={index} item={item} />
        ))}
      </div>
    )
  );
};

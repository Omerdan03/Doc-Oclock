export const EmptyState = ({ area }) => {
  const messages = {
    appointments: "You don't have any appointments",
    treatments: "You don't have any treatments",
    patients: "You don't have any patients",
    default: "Nothing to show",
  };
  const message = messages[area] || messages.default;
  return <h5 className="text-muted mt-5">{message}</h5>;
};
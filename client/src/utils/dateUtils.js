export const isTomorrow = (date) => {
  if (!date) return false;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return new Date(date).toDateString() === tomorrow.toDateString();
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

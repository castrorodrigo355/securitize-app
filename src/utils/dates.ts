export const getDatesDiff = (date: number | null): number => {
  if (!date) return 0;
  return (new Date().getTime() - date) / (1000 * 60 * 60 * 24);
};

export const adjustTimezone = (date: Date) => {
  return date.getTimezoneOffset() * 60 * 1000;
};

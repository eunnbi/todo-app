const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const useToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();
  return {
    year,
    month: MONTHS[today.getMonth()].toUpperCase(),
    date,
    day: DAYS[today.getDay()].toUpperCase(),
  };
};

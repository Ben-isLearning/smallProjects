const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 4;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 12;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8.5;
      break;
    default:
      return "Thats not a day of the week...";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  return actualSleepHours > idealSleepHours
    ? "Sleep Surpluss"
    : actualSleepHours == idealSleepHours
    ? "Sleep Target Met"
    : "Sleep Deficit";
};

console.log(calculateSleepDebt());

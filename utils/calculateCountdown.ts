const calculateCountdown = (startDate: string) => {
  const todayString = new Date().toUTCString();
  const tripStart = new Date(startDate).getTime();
  const today = new Date(todayString).getTime();

  const timeRemaining = tripStart - today;
  return {
    daysUntil: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
    hoursUntil: Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutesUntil: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
    secondsUntil: Math.floor((timeRemaining % (1000 * 60)) / 1000),
  };
};

export default calculateCountdown;

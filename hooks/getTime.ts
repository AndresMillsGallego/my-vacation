import { useState, useEffect } from "react";

const useCurrentTime = () => {
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState(date.toLocaleDateString);
  const [time, setTime] = useState(date.toLocaleTimeString);

  const getCurrentTime = () => {
    setInterval(() => {
      setDate(new Date());
    }, 6000);
  };

  useEffect(() => {
    setTime(date.toLocaleTimeString());
  }, [date]);

  return {
    today,
    time,
    getCurrentTime,
  };
};

export default useCurrentTime;

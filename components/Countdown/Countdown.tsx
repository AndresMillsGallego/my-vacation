"use client";
import { useState } from "react";
import styles from "./Countdown.module.scss";

interface CountdownProps {
  startDate: string;
}
const Countdown = (props: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>();

  const { startDate } = props;
  const daysUntil = timeRemaining
    ? Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    : "";
  const hoursUntil = timeRemaining
    ? Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    : "";
  const minutesUntil = timeRemaining
    ? Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    : "";
  const secondsUntil = timeRemaining
    ? Math.floor((timeRemaining % (1000 * 60)) / 1000)
    : "";

  const calculate = () => {
    const today = new Date(new Date().toUTCString()).getTime();
    const tripStart = new Date(startDate).getTime();
    return tripStart - today;
  };

  setInterval(() => {
    const time = calculate();
    setTimeRemaining(time);
  }, 1000);

  return (
    <div className={styles["countdown-div"]}>
      <h2>{daysUntil ? `Days: ${daysUntil}` : ""}</h2>
      <h2>{hoursUntil ? `Hours: ${hoursUntil}` : ""}</h2>
      <h2>{minutesUntil ? `Minutes: ${minutesUntil}` : ""}</h2>
      <h2>{secondsUntil ? `Seconds: ${secondsUntil}` : ""}</h2>
    </div>
  );
};

export default Countdown;

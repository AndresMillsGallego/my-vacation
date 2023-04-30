"use client";
import { useState } from "react";
import { adjustTimezone } from "@/utils/adjustTimezone";
import styles from "./Countdown.module.scss";

interface CountdownProps {
  startDate: string;
  destination: string;
}
const Countdown = (props: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>();

  const { startDate, destination } = props;
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
    const today = new Date().getTime();
    const timeZoneDifference = adjustTimezone(new Date(startDate));
    const tripStart = new Date(startDate).getTime() + timeZoneDifference;

    return tripStart - today;
  };

  setInterval(() => {
    const time = calculate();
    setTimeRemaining(time);
  }, 1000);

  return (
    <>
      <div>
        <h1 className={styles["destination-header"]}>
          Congratulations! You are going to {destination} in:{" "}
        </h1>
      </div>
      <div className={styles["countdown-div"]}>
        <h2>{daysUntil ? `Days: ${daysUntil}` : ""}</h2>
        <h2>{hoursUntil ? `Hours: ${hoursUntil}` : ""}</h2>
        <h2>{minutesUntil ? `Minutes: ${minutesUntil}` : ""}</h2>
        <h2>{secondsUntil ? `Seconds: ${secondsUntil}` : ""}</h2>
      </div>
    </>
  );
};

export default Countdown;

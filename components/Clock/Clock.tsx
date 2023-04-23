"use client";
import { useState, useEffect } from "react";
import styles from "./Clock.module.scss";

const Clock = () => {
  const today = new Date();
  const todayString = today.toLocaleDateString();
  const [time, setTime] = useState<string>();

  const getTime = () => {
    setInterval(() => {
      const currentDate = new Date();
      setTime(currentDate.toLocaleTimeString());
    }, 1000);
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div className={styles["clock-div"]}>
      <h4>{time}</h4>
      <h4>{todayString}</h4>
    </div>
  );
};

export default Clock;

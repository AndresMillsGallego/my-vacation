"use client";

import { useState } from "react";
import styles from "./TripForm.module.scss";

const TripForm = () => {
  return (
    <div className={styles["form-div"]}>
      <form>
        <fieldset className={styles['fieldset']}>
          <legend>Trip Details</legend>
          <label>
            Destination
            <input type="text" name="destination" />
          </label>
          <label>
            Trip Starts:
            <input type="date" name="startDate" />
          </label>
          <label>
            Trip Ends:
            <input type="date" name="endDate" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default TripForm;

"use client";

import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Countdown from "../Countdown/Countdown";
import styles from "./TripForm.module.scss";

const TripForm = () => {
  const [destination, setDestination] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [tripType, setTripType] = useState<string>();

  return (
    <>
      {startDate ? <Countdown startDate={startDate} /> : null}
      <div className={styles["form-div"]}>
        <Box component="form" className={styles["form-div"]}>
          <FormLabel>Enter Trip Details</FormLabel>

          <FormControl className={styles["form-controls"]}>
            <TextField
              label="Destination"
              required
              InputLabelProps={{ shrink: true }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles["form-controls"]}>
            <TextField
              label="Start Date"
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles["form-controls"]}>
            <TextField
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles["form-controls"]}>
            <TextField
              label="Trip Type"
              select
              defaultValue="What type of trip is this?"
              value={tripType}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setTripType(e.target.value)}
            >
              <MenuItem value="Tropcial Paradise">Tropical Paradise</MenuItem>
              <MenuItem value="Winter Wonderland">Winter Wonderland</MenuItem>
              <MenuItem value="Urban Adventure">Urban Adventure</MenuItem>
              <MenuItem value="Relaxing Retreat">Relaxing Retreat</MenuItem>
            </TextField>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default TripForm;

"use client";

import { FormEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import Countdown from "../Countdown/Countdown";
import styles from "./TripForm.module.scss";

interface TripProps {
  destination: string;
  startDate: string;
  endDate?: string;
  tripType?: string;
}

const TripForm = () => {
  const [destination, setDestination] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [tripType, setTripType] = useState<string>("");

  const [trip, setTrip] = useState<TripProps>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(tripType);
    const trip: TripProps = {
      destination,
      startDate,
      endDate,
      tripType,
    };
    setTrip(trip);
  };

  return (
    <div className={trip ? styles[`${trip.tripType}`] : styles["default-trip"]}>
      {trip ? (
        <Countdown startDate={trip.startDate} destination={trip.destination} />
      ) : null}
      <div>
        <Box
          component="form"
          className={styles["form-div"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <FormLabel>Enter Trip Details</FormLabel>

          <FormControl className={styles["form-controls"]}>
            <TextField
              label="Destination"
              required
              type="text"
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
              <MenuItem value="tropical-paradise">Tropical Paradise</MenuItem>
              <MenuItem value="winter-wonderland">Winter Wonderland</MenuItem>
              <MenuItem value="urban-adventure">Urban Adventure</MenuItem>
              <MenuItem value="relaxing-retreat">Relaxing Retreat</MenuItem>
            </TextField>
          </FormControl>
          <Button type="submit" variant="outlined">
            Add Trip
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default TripForm;

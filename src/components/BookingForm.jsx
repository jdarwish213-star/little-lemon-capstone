
import { useState } from "react";
import { submitAPI } from "../api";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setDate(selectedDate);
    setTime("");
    setError("");

    dispatch(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      setError("Please select a date.");
      return;
    }

    if (!time) {
      setError("Please select a time.");
      return;
    }

    if (!guests || Number(guests) < 1 || Number(guests) > 10) {
      setError("Please select between 1 and 10 guests.");
      return;
    }

    if (!occasion) {
      setError("Please select an occasion.");
      return;
    }

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };

    const result = submitAPI(formData);

    if (result) {
      setError("");
      alert("Your table has been reserved successfully!");

      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
    } else {
      setError("Sorry, your reservation could not be completed. Please try again.");
    }
  };

  return (
    <section className="booking" id="reservations">
      <div className="booking-header">
        <h2>Reserve a Table</h2>
        <p>
          Book your table at Little Lemon and enjoy a delicious
          Mediterranean dining experience.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="date">Choose a date</label>
          <input
            type="date"
            id="date"
            name="date"
            min={today}
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose a time</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Reserve a Table</button>
      </form>
    </section>
  );
}

export default BookingForm;

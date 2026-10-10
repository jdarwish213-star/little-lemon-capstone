import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { updateTimes, initializeTimes } from "./App"; // أو حسب مكان دوال الـ reducer لديك

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns expected available times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns the same available times", () => {
  const initialState = ["17:00", "18:00"];
  const action = "2026-10-10";
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
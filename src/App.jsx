import { useReducer } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { fetchAPI } from "./api";
import "./App.css";

// الدوال الخاصة بالـ Reducer
function initializeTimes() {
  return fetchAPI(new Date());
}

function updateTimes(state, action) {
  return fetchAPI(new Date(action));
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </div>
  );
}

export default App;
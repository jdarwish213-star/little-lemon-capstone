import { useReducer } from "react";
import { fetchAPI } from "../api";

function initializeTimes() {
  return fetchAPI(new Date());
}

function updateTimes(state, action) {
  return fetchAPI(action);
}
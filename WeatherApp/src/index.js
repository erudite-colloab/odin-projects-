import "./styles.css";

import { getWeather } from "./api.js";

import { processWeatherData } from "./weather.js";

import {
  displayWeather,
  showLoading,
  hideLoading,
  showError,
  hideError,
} from "./dom.js";

let currentWeather = null;

let currentUnit = "C";

const form = document.querySelector("#search-form");

const input = document.querySelector("#location-input");

const celsiusButton = document.querySelector("#celsius-btn");

const fahrenheitButton = document.querySelector("#fahrenheit-btn");

async function searchWeather(location) {
  showLoading();

  hideError();

  try {
    const data = await getWeather(location);

    currentWeather = processWeatherData(data);

    displayWeather(currentWeather, currentUnit);
  } catch (error) {
    showError(error.message || "Something went wrong.");
  } finally {
    hideLoading();
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = input.value.trim();

  if (!location) {
    return;
  }

  await searchWeather(location);
});

celsiusButton.addEventListener("click", () => {
  currentUnit = "C";

  celsiusButton.classList.add("active");

  fahrenheitButton.classList.remove("active");

  if (currentWeather) {
    displayWeather(currentWeather, currentUnit);
  }
});

fahrenheitButton.addEventListener("click", () => {
  currentUnit = "F";

  fahrenheitButton.classList.add("active");

  celsiusButton.classList.remove("active");

  if (currentWeather) {
    displayWeather(currentWeather, currentUnit);
  }
});

searchWeather("Accra");

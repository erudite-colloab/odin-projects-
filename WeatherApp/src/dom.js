function displayWeather(weather, unit = "C") {
  const container = document.querySelector("#weather-content");

  const temperature = convertTemperature(weather.current.temp, unit);

  const feelsLike = convertTemperature(weather.current.feelsLike, unit);

  container.innerHTML = `
        <div class="current-weather">

            <div class="location">
                <h2>${weather.location}</h2>
            </div>

            <div class="weather-main">

                <div class="temperature">
                    ${temperature}°
                </div>

                <div class="condition">
                    ${weather.current.conditions}
                </div>

            </div>

            <div class="weather-details">

                <div class="detail">
                    <span>Feels like</span>
                    <strong>${feelsLike}°</strong>
                </div>

                <div class="detail">
                    <span>Humidity</span>
                    <strong>${weather.current.humidity}%</strong>
                </div>

                <div class="detail">
                    <span>Wind</span>
                    <strong>${weather.current.windSpeed} km/h</strong>
                </div>

            </div>

        </div>

        <h3 class="forecast-title">
            5-Day Forecast
        </h3>

        <div class="forecast">
            ${createForecast(weather.forecast, unit)}
        </div>
    `;

  updateBackground(weather.current.icon);
}

function createForecast(forecast, unit) {
  return forecast
    .map((day) => {
      const date = new Date(day.date);

      const temperature = convertTemperature(day.temp, unit);

      return `
            <div class="forecast-card">

                <h4>
                    ${date.toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                </h4>

                <div class="forecast-icon">
                    ${getWeatherEmoji(day.icon)}
                </div>

                <strong>
                    ${temperature}°
                </strong>

                <p>
                    ${day.conditions}
                </p>

            </div>
        `;
    })
    .join("");
}

function convertTemperature(temp, unit) {
  if (unit === "F") {
    return Math.round((temp * 9) / 5 + 32);
  }

  return Math.round(temp);
}

function getWeatherEmoji(icon) {
  const icons = {
    "clear-day": "☀️",
    "clear-night": "🌙",
    "partly-cloudy-day": "⛅",
    "partly-cloudy-night": "☁️",
    cloudy: "☁️",
    rain: "🌧️",
    "showers-day": "🌦️",
    "showers-night": "🌧️",
    "thunder-rain": "⛈️",
    snow: "❄️",
    fog: "🌫️",
    wind: "💨",
  };

  return icons[icon] || "🌤️";
}

function updateBackground(icon) {
  document.body.className = "";

  if (icon.includes("rain")) {
    document.body.classList.add("rainy");
  } else if (icon.includes("snow")) {
    document.body.classList.add("snowy");
  } else if (icon.includes("cloud")) {
    document.body.classList.add("cloudy");
  } else if (icon.includes("clear")) {
    document.body.classList.add("sunny");
  } else {
    document.body.classList.add("default");
  }
}

function showLoading() {
  document.querySelector("#loading").classList.remove("hidden");
}

function hideLoading() {
  document.querySelector("#loading").classList.add("hidden");
}

function showError(message) {
  const error = document.querySelector("#error");

  error.textContent = message;

  error.classList.remove("hidden");
}

function hideError() {
  document.querySelector("#error").classList.add("hidden");
}

export { displayWeather, showLoading, hideLoading, showError, hideError };

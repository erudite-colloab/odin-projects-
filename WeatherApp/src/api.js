const API_KEY = process.env.WEATHER_API_KEY;

async function getWeather(location) {
  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
    `${encodeURIComponent(location)}` +
    `?unitGroup=metric` +
    `&key=${API_KEY}` +
    `&contentType=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find that location.");
  }

  const data = await response.json();

  return data;
}

export { getWeather };

function processWeatherData(data) {
  const current = data.currentConditions;

  const forecast = data.days.slice(0, 5).map((day) => ({
    date: day.datetime,
    temp: day.temp,
    feelsLike: day.feelslike,
    conditions: day.conditions,
    description: day.description,
    humidity: day.humidity,
    windSpeed: day.windspeed,
    icon: day.icon,
  }));

  return {
    location: data.resolvedAddress,

    current: {
      temp: current.temp,
      feelsLike: current.feelslike,
      conditions: current.conditions,
      description: current.conditions,
      humidity: current.humidity,
      windSpeed: current.windspeed,
      icon: current.icon,
    },

    forecast,
  };
}

export { processWeatherData };

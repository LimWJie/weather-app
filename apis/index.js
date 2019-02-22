const API_KEY = "d3df96e2cafdafa89228156bd238cc58";
const UNIT = "metric";

export const get_weather_forecasts = (city, country) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${UNIT}&APPID=${API_KEY}`
  );
};

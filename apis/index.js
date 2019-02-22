const API_KEY = "d3df96e2cafdafa89228156bd238cc58";
const UNIT = "metric";

/**
 * Restructure data returned by openweathermap 5 day/3 hour forecast API
 * This is required to minimize data clutter and for the convenience of React Component to render
 * @param {} data
 */
const selectWeatherForecasts = data => {
  const { list = [] } = data;
  return list.reduce((forecasts, item) => {
    forecasts.push({
      datetime: item.dt,
      temperature: item.main.temp,
      tempLow: item.main.temp_min,
      tempHigh: item.main.temp_max,
      weather: item.weather[0].main
    });
    return forecasts;
  }, []);
};

/**
 * Query weather forecasts by city and country
 * @param {String} city
 * @param {String} country
 */
export const get_weather_forecasts = (city, country) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${UNIT}&APPID=${API_KEY}`
  )
    .then(res => res.json())
    .then(data => selectWeatherForecasts(data));
};

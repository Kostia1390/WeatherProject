export const SET_WEATHER = "SET_WEATHER";

export const setWeather = (weatherData) => ({
  type: SET_WEATHER,
  payload: weatherData,
});

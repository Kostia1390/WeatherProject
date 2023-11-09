export const fetchWeatherForLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bcfaa123dd954d9ba34150645230611&q=${latitude},${longitude}`
    );
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching weather for location:", error);
    return null;
  }
};

export const fetchWeatherForCity = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bcfaa123dd954d9ba34150645230611&q=${city}`
    );
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching weather for city:", error);
    return null;
  }
};

export const fetchHourlyWeather = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcfaa123dd954d9ba34150645230611&q=${city}&hours=24`
    );
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const json = await response.json();
    return json.forecast.forecastday[0].hour;
  } catch (error) {
    console.error("Error fetching hourly weather:", error);
    return null;
  }
};

export const fetchThreeDayForecast = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcfaa123dd954d9ba34150645230611&q=${city}&days=3`
    );
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const json = await response.json();
    return json.forecast.forecastday;
  } catch (error) {
    console.error("Error fetching three day forecast:", error);
    return null;
  }
};

export const fetchFourteenDayForecast = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcfaa123dd954d9ba34150645230611&q=${city}&days=14`
    );
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const json = await response.json();
    return json.forecast.forecastday;
  } catch (error) {
    console.error("Error fetching three day forecast:", error);
    return null;
  }
};

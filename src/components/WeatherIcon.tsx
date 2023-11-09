import React from 'react';
import Sunny from '../../assets/iconsWeather/sunny.svg';
import Rain from '../../assets/iconsWeather/rain.svg';
import Cloudy from '../../assets/iconsWeather/cloudy.svg';
import Fog from '../../assets/iconsWeather/fog.svg';
import Overcast from '../../assets/iconsWeather/overcast.svg';

const createIcon = (Icon) => <Icon width={150} height={150} />;

const weatherConditions = {
  "rain": createIcon(Rain),
  "sunny": createIcon(Sunny),
  "clear": createIcon(Sunny),
  "cloudy": createIcon(Cloudy),
  "fog": createIcon(Fog),
  "mist": createIcon(Fog),
  "overcast": createIcon(Overcast),
};

const WeatherIcon = ({ conditionText }) => {
  if (!conditionText) return null;

  const condition = conditionText.toLowerCase();
  for (const key in weatherConditions) {
    if (condition.includes(key)) {
      return weatherConditions[key];
    }
  }
  return null;
};

export default WeatherIcon;

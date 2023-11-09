import React from "react";
import { View, StyleSheet } from "react-native";
import Sunny from "../../assets/iconsWeather/sunny.svg";
import Clear from "../../assets/iconsWeather/clear.svg";
import Rain from "../../assets/iconsWeather/rain.svg";
import Cloudy from "../../assets/iconsWeather/cloudy.svg";
import Fog from "../../assets/iconsWeather/fog.svg";
import Overcast from "../../assets/iconsWeather/overcast.svg";

const createIcon = (Icon) => <Icon width={150} height={150} />;

const weatherConditions = {
  rain: createIcon(Rain),
  sunny: createIcon(Sunny),
  clear: createIcon(Clear),
  cloudy: createIcon(Cloudy),
  fog: createIcon(Fog),
  mist: createIcon(Fog),
  overcast: createIcon(Overcast),
};
const WeatherIcon = ({ conditionText }) => {
  if (!conditionText) return null;

  const condition = conditionText.toLowerCase();
  for (const key in weatherConditions) {
    if (condition.includes(key)) {
      return <View style={styles.iconContainer}>{weatherConditions[key]}</View>;
    }
  }
  return null;
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WeatherIcon;

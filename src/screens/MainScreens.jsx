// MainScreens.js
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/actions/weatherActions";
import { fetchCurrentLocation } from "../components/location";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "../components/CustomInput";
import WeatherWindows from "../components/WeatherWindows";
import { Typography } from "../Typography";
import WeatherIcon from "../components/WeatherIcon";
import Settings from "../../assets/icons/settings.svg";
import SettingsModal from "../components/SettingsModal";
import { useNavigation } from "@react-navigation/native";
import {
  fetchWeatherForLocation,
  fetchWeatherForCity,
} from "../components/weatherService";

const MainScreens = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather.weatherData);
  const locationName = useSelector((state) => state.weather.locationName);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const fetchWeatherForCurrentLocation = async () => {
    const location = await fetchCurrentLocation();
    if (location) {
      const { latitude, longitude } = location.coords;
      const weatherData = await fetchWeatherForLocation(latitude, longitude);
      if (weatherData) {
        dispatch(setWeather(weatherData));
      }
    }
  };

  useEffect(() => {
    fetchWeatherForCurrentLocation();
  }, []);

  const fetchWeather = async () => {
    const weatherData = await fetchWeatherForCity(city);
    if (weatherData) {
      dispatch(setWeather(weatherData));
    }
  };

  return (
    <LinearGradient
      colors={isDarkTheme ? ["#000", "#333"] : ["#a7ddef", "#3aa1c9"]}
      style={styles.container}
    >
      <View style={{ flexDirection: "row", gap: 40 }}>
        <CustomInput city={city} setCity={setCity} onSearch={fetchWeather} />
        <View style={styles.settingsWrapper}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Settings width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>

      {locationName && (
        <Typography f29 semibold color="#fff">
          {locationName}
        </Typography>
      )}
      {weather && (
        <View style={styles.weatherContainer}>
          <WeatherIcon conditionText={weather.current.condition.text} />
          <Typography
            f64
            semibold
            color="#fff"
            textAlign="center"
            marginTop={20}
            marginBottom={30}
          >
            {weather.current.temp_c}°
          </Typography>
        </View>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("TodayWeather")}>
        <WeatherWindows title="Погода на сьогодні" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ThreeDayWeather")}>
        <WeatherWindows title="Погода на 3 дні" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("FourteenDayWeather")}
      >
        <WeatherWindows title="Погода на 14 днів" />
      </TouchableOpacity>

      <SettingsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  weatherContainer: {
    marginTop: 20,
  },
  settingsWrapper: {
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
});

export default MainScreens;

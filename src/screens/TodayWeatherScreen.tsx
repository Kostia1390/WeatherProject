import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchHourlyWeather } from "../components/weatherService";
import WeatherIcon from "../components/WeatherIcon";
import { Typography } from "../Typography";
import BackArrowSvg from "../../assets/icons/backArrow.svg";
import { useNavigation } from "@react-navigation/native";

const TodayWeatherScreen = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const navigation = useNavigation();
  const city = useSelector((state) => state.weather.locationName);
  const today = new Date();
  const dateString = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHourlyWeather(city);
      if (data) {
        const filteredData = data.filter((hour, index) => index % 3 === 0);
        setHourlyWeather(filteredData);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <LinearGradient
      colors={isDarkTheme ? ["#000", "#333"] : ["#a7ddef", "#3aa1c9"]}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={30} height={30} />
        </TouchableOpacity>
        <Typography f24 semibold color="#fff" textAlign="center">
          Погода Сьогодні
        </Typography>
        <View style={{ width: 20, height: 20 }} />
      </View>
      <Typography f24 semibold color="#fff" textAlign="center" marginTop={10}>
        {dateString}
      </Typography>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {hourlyWeather.map((hour, index) => (
          <View
            key={index}
            style={[
              styles.hourlyWeatherItem,
              index === 0 && styles.firstItem,
              index === hourlyWeather.length - 1 && styles.lastItem,
            ]}
          >
            <Typography
              f24
              semibold
              color="#fff"
              textAlign="center"
              marginBottom={10}
            >
              {`${new Date(hour.time).getHours()}:00`}{" "}
            </Typography>
            <WeatherIcon conditionText={hour.condition.text} />
            <Typography
              f24
              semibold
              color="#fff"
              textAlign="center"
              marginBottom={10}
            >
              {`${hour.temp_c}°C`}{" "}
            </Typography>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  hourlyWeatherItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
  },
  firstItem: {
    marginTop: 10,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

export default TodayWeatherScreen;

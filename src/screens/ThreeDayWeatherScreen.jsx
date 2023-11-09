import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { fetchThreeDayForecast } from "../components/weatherService";
import WeatherIcon from "../components/WeatherIcon";
import { Typography } from "../Typography";
import { LinearGradient } from "expo-linear-gradient";
import BackArrowSvg from "../../assets/icons/backArrow.svg";
import { useNavigation } from "@react-navigation/native";

const ThreeDayWeatherScreen = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const navigation = useNavigation();
  const city = useSelector((state) => state.weather.locationName);
  const [forecast, setForecast] = useState([]);
  const today = new Date();
  const dateString = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}`;
  const dateInThreeDays = new Date(today);
  dateInThreeDays.setDate(today.getDate() + 2);
  const dateInThreeDaysString = `${dateInThreeDays.getDate()}.${
    dateInThreeDays.getMonth() + 1
  }.${dateInThreeDays.getFullYear()}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchThreeDayForecast(city);
      if (data) {
        const modifiedData = data.map((day) => ({
          ...day,
          hour: day.hour.filter((_, index) => index % 7 === 0),
        }));
        setForecast(modifiedData);
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={30} height={30} />
        </TouchableOpacity>
        <Typography f24 semibold color="#fff" textAlign="center">
          Погода на 3 Дні
        </Typography>
        <View style={{ width: 30, height: 30 }} />
      </View>
      <Typography f24 semibold color="#fff" textAlign="center" marginTop={10}>
        {dateString} - {dateInThreeDaysString}
      </Typography>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {forecast.map((day, dayIndex) => (
          <View
            key={dayIndex}
            style={[
              styles.dailyForecast,
              dayIndex === forecast.length - 1 && styles.lastDailyForecast,
            ]}
          >
            <Typography
              f27
              semibold
              textAlign="center"
              color="#fff"
              marginTop={25}
              marginBottom={15}
            >
              {day.date}
            </Typography>
            {day.hour.map((hour, hourIndex) => (
              <View
                key={hourIndex}
                style={[
                  styles.hourlyForecast,
                  hourIndex === day.hour.length - 1 &&
                    styles.lastHourlyForecast,
                ]}
              >
                <Typography
                  f27
                  semibold
                  color="#fff"
                  marginBottom={10}
                >{`${new Date(hour.time).getHours()}:00`}</Typography>
                <WeatherIcon conditionText={hour.condition.text} />
                <Typography
                  f24
                  semibold
                  color="#fff"
                  textAlign="center"
                  marginBottom={10}
                >{`${hour.temp_c}°C`}</Typography>
              </View>
            ))}
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  dailyForecast: {
    borderBottomWidth: 8,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  hourlyForecast: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
  },
  lastHourlyForecast: {
    borderBottomWidth: 0,
  },
  lastDailyForecast: {
    borderBottomWidth: 0,
  },
});

export default ThreeDayWeatherScreen;

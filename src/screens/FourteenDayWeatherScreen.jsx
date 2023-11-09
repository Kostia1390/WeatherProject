import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { fetchFourteenDayForecast } from "../components/weatherService";
import WeatherIcon from "../components/WeatherIcon";
import { Typography } from "../Typography";
import { LinearGradient } from "expo-linear-gradient";
import BackArrowSvg from "../../assets/icons/backArrow.svg";
import { useNavigation } from "@react-navigation/native";

const FourteenDayWeatherScreen = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const navigation = useNavigation();
  const city = useSelector((state) => state.weather.locationName);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFourteenDayForecast(city);
      if (data) {
        setForecast(data);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  const today = new Date();

  const dateString = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}`;
  const dateInThreeDays = new Date(today);
  dateInThreeDays.setDate(today.getDate() + 13);
  const dateInThreeDaysString = `${dateInThreeDays.getDate()}.${
    dateInThreeDays.getMonth() + 1
  }.${dateInThreeDays.getFullYear()}`;

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
          Погода на 14 Днів
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
            {/* Возможно, вам нужно будет изменить следующие строки в соответствии с вашей структурой данных */}
            <WeatherIcon conditionText={day.day.condition.text} />
            <Typography
              f24
              semibold
              color="#fff"
              textAlign="center"
              marginBottom={10}
            >{`${day.day.avgtemp_c}°C`}</Typography>
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
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  lastDailyForecast: {
    borderBottomWidth: 0,
  },
});

export default FourteenDayWeatherScreen;

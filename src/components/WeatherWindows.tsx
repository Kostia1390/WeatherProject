import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "../Typography";

const WeatherWindows = () => {
  return (
    <View style={styles.container}>
      <Typography color={"#fff"}>погода на сьогодні</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#2682B7",
    borderRadius: 20,
  },
  weatherContainer: {
    marginTop: 20,
  },
});

export default WeatherWindows;

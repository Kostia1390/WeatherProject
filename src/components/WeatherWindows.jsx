import React from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "../Typography";
import { useSelector } from "react-redux";
import BackArrowSvg from "../../assets/icons/backArrow.svg";

const WeatherWindows = ({ title }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#0a3a0a" : "#2682B7" },
      ]}
    >
      <View style={styles.textContainer}>
        <Typography color={"#fff"} numberOfLines={1} adjustsFontSizeToFit>
          {title}
        </Typography>
      </View>
      <View style={styles.flippedIcon}>
        <BackArrowSvg width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    maxWidth: 300,
    height: 80,
    padding: 20,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  flippedIcon: {
    transform: [{ scaleX: -1 }],
  },
});

export default WeatherWindows;

// CustomInput.js
import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Typography } from "../Typography";

import Search from "../../assets/icons/search.svg";

const CustomInput = ({ city, setCity, onSearch }) => {
  return (
    <View style={styles.container}>
      <Search width={25} height={25} />
      <TextInput
        style={styles.input}
        placeholder="Введіть місто"
        value={city}
        onChangeText={setCity}
      />
      {city.length >= 3 && (
        <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
          <Typography f14 normal color="#fff">
            Пошук
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 250,
    height: "100%",
    maxHeight: 50,
  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    borderWidth: 0,
    fontSize: 16,
  },
  searchButton: {
    padding: 10,
    backgroundColor: "#000000",
    borderRadius: 6,
  },
});

export default CustomInput;

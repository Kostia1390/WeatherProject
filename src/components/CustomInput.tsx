import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ city, setCity }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Введите город"
      value={city}
      onChangeText={setCity}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default CustomInput;

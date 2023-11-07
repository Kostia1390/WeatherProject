// CustomInput.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Typography } from '../Typography';

const CustomInput = ({ city, setCity, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите город"
        value={city}
        onChangeText={setCity}
      />
      {city.length >= 3 && (
        <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
          <Typography f14 normal color='#fff'>Поиск</Typography>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor:'#fff',
    width:'90%'
  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    borderWidth: 0,
    fontSize:16 
  },
  searchButton: {
    padding: 10, 
    backgroundColor:'#000000',
    borderRadius:6,

  },
});

export default CustomInput;

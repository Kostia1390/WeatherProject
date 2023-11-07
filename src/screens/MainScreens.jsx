// MainScreens.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setWeather } from '../redux/actions';
import { fetchCurrentLocation } from '../components/location'; 
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput';


const MainScreens = () => {
  const [city, setCity] = useState('');
  const weather = useSelector(state => state.weatherData);
  const locationName = useSelector(state => state.locationName);
  const dispatch = useDispatch();

  const fetchWeatherForCurrentLocation = async () => {
    const location = await fetchCurrentLocation();
    if (location) {
      const { latitude, longitude } = location.coords;
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bcfaa123dd954d9ba34150645230611&q=${latitude},${longitude}`);
        const json = await response.json();
        dispatch(setWeather(json));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchWeatherForCurrentLocation();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bcfaa123dd954d9ba34150645230611&q=${city}`);
      const json = await response.json();
      dispatch(setWeather(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
    colors={['#a7ddef', '#3aa1c9']} 
    style={styles.container}
  >
 <CustomInput city={city} setCity={setCity} />
      {locationName && (
        <Text>Текущее местоположение: {locationName}</Text>
      )}
      <Button title="Показать погоду" onPress={fetchWeather} />
      {weather && (
        <View style={styles.weatherContainer}>
          <Text>Температура: {weather.current.temp_c}°C</Text>
          <Text>Состояние: {weather.current.condition.text}</Text>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  weatherContainer: {
    marginTop: 20,
  },
});

export default MainScreens;

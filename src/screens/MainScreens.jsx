// MainScreens.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setWeather } from '../redux/actions';
import { fetchCurrentLocation } from '../components/location'; 
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput';
import WeatherWindows from '../components/WeatherWindows';
import { Typography } from '../Typography';
import WeatherIcon from '../components/WeatherIcon';
import Settings from '../../assets/icons/settings.svg';
import SettingsModal from '../components/SettingsModal';



const MainScreens = () => {
  const [city, setCity] = useState('');
  const weather = useSelector(state => state.weatherData);
  const locationName = useSelector(state => state.locationName);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false); 
  const [isDarkTheme, setIsDarkTheme] = useState(false); 


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
    colors={isDarkTheme ? ['#000', '#333'] : ['#a7ddef', '#3aa1c9']} 
    style={styles.container}
  >
   
     
   <View style={styles.settingsWrapper}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Settings width={40} height={40}/>
        </TouchableOpacity>
      </View>
      <CustomInput city={city} setCity={setCity} onSearch={fetchWeather} />
      {locationName && (
        <Typography f24 semibold color="#fff" > {locationName}</Typography>
      )}
      {weather && (
        <View style={styles.weatherContainer}>
           <WeatherIcon  conditionText={weather.current.condition.text} />
          <Typography f64 semibold color="#fff" textAlign='center'> {weather.current.temp_c}°</Typography>
        </View>
      )}

      <WeatherWindows/> 

      <SettingsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onThemeChange={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
      />

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%', 
    paddingHorizontal: 40,
    paddingTop: 50, 
  },
  weatherContainer: {
    marginTop: 20,
  },
  settingsWrapper: {
  backgroundColor:'#fff',
borderRadius:7,
width:50,
height:50,
justifyContent:'center',
alignItems:'center',
marginBottom:50},
});

export default MainScreens;

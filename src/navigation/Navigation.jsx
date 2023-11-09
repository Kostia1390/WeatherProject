import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { Chat } from "./Chat";
import MainScreens from "../screens/MainScreens";
import TodayWeatherScreen from "../screens/TodayWeatherScreen";
import ThreeDayWeatherScreen from "../screens/ThreeDayWeatherScreen";
import FourteenDayWeatherScreen from "../screens/FourteenDayWeatherScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreens"
          component={MainScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TodayWeather"
          component={TodayWeatherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThreeDayWeather"
          component={ThreeDayWeatherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FourteenDayWeather"
          component={FourteenDayWeatherScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

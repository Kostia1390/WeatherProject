// reducers/index.js
import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer,
});

export default rootReducer;

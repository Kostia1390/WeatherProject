import { SET_WEATHER } from "../actions/weatherActions";

const initialState = {
  weatherData: null,
  locationName: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
        locationName: action.payload.location.name,
      };
    default:
      return state;
  }
};

export default weatherReducer;

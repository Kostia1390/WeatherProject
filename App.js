// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainScreens from './src/screens/MainScreens'; 

const App = () => (
  <Provider store={store}>
    <MainScreens />
  </Provider>
);

export default App;

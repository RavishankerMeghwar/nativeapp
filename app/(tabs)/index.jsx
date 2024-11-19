import React from 'react';
import { Provider } from 'react-native-paper';
import HomeScreen from '../../src/HomeScreen'
export default function App() {
  return (
    <Provider>
      <HomeScreen/>
    </Provider>
  );
}

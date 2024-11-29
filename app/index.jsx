import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from '../src/navigation/AppNavigator';
import {
  DefaultTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import { myStore } from '../src/my-store/my-store';
import { Provider } from 'react-redux';

// Font configuration for React Native Paper
const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
};

// Custom theme for React Native Paper
const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3, // Ensures Material Design 3 (MD3) compatibility
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCB919', // Custom primary color
    secondary: '#000',  // Custom secondary color
  },
  fonts: configureFonts(fontConfig),
};

export default function App() {
  return (
    <Provider store={myStore}>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </PaperProvider>
    </Provider>
  );
}

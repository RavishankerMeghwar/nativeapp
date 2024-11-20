// import React from 'react';
// import { Provider } from 'react-native-paper';
// import HomeScreen from '../../src/HomeScreen'
// export default function App() {
//   return (
//     <Provider>
//       <HomeScreen/>
//     </Provider>
//   );
// }


import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from '../src/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      {/* <AppNavigatorDrawer /> */}
    </GestureHandlerRootView>
  );
}

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Todo from '../screens/Todo';
import { Ionicons } from '@expo/vector-icons'; // For hamburger icon

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// HomeStack with drawer toggle button
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => (
          <Ionicons 
            name="menu" 
            size={30} 
            color="black" 
            style={{ marginLeft: 10 }} 
            onPress={() => navigation.openDrawer()} // Toggle the drawer
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default function AppNavigatorDrawer() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeTab">
        <Drawer.Screen name="HomeTab" component={HomeStack} />
        <Drawer.Screen name="ProfileTab" component={ProfileStack} />
        <Drawer.Screen name="SettingsTab" component={SettingsStack} />
        <Drawer.Screen name="TodoTab" component={Todo} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}

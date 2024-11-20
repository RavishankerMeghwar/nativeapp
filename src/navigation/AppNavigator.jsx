import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Text } from 'react-native';
import Todo from '../screens/Todo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

   

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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

export default function AppNavigator() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="HomeTab" // Set HomeTab as the default
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: "Home" }} />
            <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ tabBarLabel: "Profile" }} />
            <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ tabBarLabel: "Settings" }} />
            <Tab.Screen name="TodoTab" component={Todo} options={{ tabBarLabel: "Add Task" }} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Text } from 'react-native';
import Todo from '../screens/Todo';
import ViewProduct from '../screens/product/view-product';
import Icon from 'react-native-vector-icons/Ionicons';
import MoreScreen from '../screens/more';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ViewProduct" component={ViewProduct} options={{ title: 'Product Details' }} />
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
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    position: 'fixed',
                    bottom: 10,
                    // left: 10,
                    right: 10,
                    height: 60,
                    borderRadius: 20,
                    backgroundColor: '#ffffff',
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 0, height: 5 },
                    shadowRadius: 5,
                    elevation: 5,
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = 'home-outline'; // Home icon
                    } else if (route.name === 'ProfileTab') {
                        iconName = 'person-outline'; // Profile icon
                    } else if (route.name === 'SettingsTab') {
                        iconName = 'settings-outline'; // Settings icon
                    } else if (route.name === 'TodoTab') {
                        iconName = 'add-circle-outline'; // Todo icon
                    }
                    else if (route.name === 'More') {
                        iconName = 'ellipsis-horizontal-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007BFF', 
                tabBarInactiveTintColor: 'gray', 
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={SettingsStack}
                options={{ tabBarLabel: 'Settings' }}
            />
            <Tab.Screen
                name="TodoTab"
                component={Todo}
                options={{ tabBarLabel: 'Add Task' }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{ tabBarLabel: 'More' }}
            />
        </Tab.Navigator>
    );

}

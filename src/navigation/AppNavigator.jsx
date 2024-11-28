// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import { Text } from 'react-native';
// import Todo from '../screens/Todo';
// import ViewProduct from '../screens/product/view-product';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MoreScreen from '../screens/more';
// import CampaignScreen from '../screens/campaign/campaigns';
// import CampaignDetailsScreen from '../screens/campaign/CampaignDetailsScreen';
// import LoginScreen from '../screens/auth/Login';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


// const HomeStack = () => (
//     <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
//         <Stack.Screen name="ViewProduct" component={ViewProduct} options={{ title: 'Product Details' }} />
//         <Stack.Screen name="Campaign" component={CampaignScreen} options={{ title: 'Campaign' }} />
//     </Stack.Navigator>
// );


// const ProfileStack = () => (
//     <Stack.Navigator>
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
// );

// const SettingsStack = () => (
//     <Stack.Navigator>
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
// );
// const MoreStack = () => (
//     <Stack.Navigator>
//         <Stack.Screen name="More" component={MoreScreen} options={{ title: 'More' }} />
//         <Stack.Screen name="Campaign" component={CampaignScreen} options={{ title: 'Campaign' }} />
//         <Stack.Screen name="CampaignDetails" component={CampaignDetailsScreen} options={{ title: 'Campaign Manage' }} />
//     </Stack.Navigator>
// );

// export default function AppNavigator() {
//     return (
//         <Tab.Navigator
//             initialRouteName="HomeTab"
//             screenOptions={({ route }) => ({
//                 headerShown: false,
//                 tabBarStyle: {
//                     position: 'fixed',
//                     bottom: 10,
//                     // left: 10,
//                     right: 10,
//                     height: 60,
//                     borderRadius: 20,
//                     backgroundColor: '#ffffff',
//                     shadowColor: '#000',
//                     shadowOpacity: 0.2,
//                     shadowOffset: { width: 0, height: 5 },
//                     shadowRadius: 5,
//                     elevation: 5,
//                 },
//                 tabBarIcon: ({ color, size }) => {
//                     let iconName;
//                     if (route.name === 'HomeTab') {
//                         iconName = 'home-outline'; // Home icon
//                     } else if (route.name === 'ProfileTab') {
//                         iconName = 'person-outline'; // Profile icon
//                     } else if (route.name === 'SettingsTab') {
//                         iconName = 'settings-outline'; // Settings icon
//                     } else if (route.name === 'TodoTab') {
//                         iconName = 'add-circle-outline'; // Todo icon
//                     }
//                     else if (route.name === 'More') {
//                         iconName = 'ellipsis-horizontal-outline';
//                     }
//                     return <Icon name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#007BFF',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//         >
//             <Tab.Screen
//                 name="HomeTab"
//                 component={HomeStack}
//                 options={{ tabBarLabel: 'Home' }}
//             />
//             <Tab.Screen
//                 name="ProfileTab"
//                 component={ProfileStack}
//                 options={{ tabBarLabel: 'Profile' }}
//             />
//             <Tab.Screen
//                 name="SettingsTab"
//                 component={SettingsStack}
//                 options={{ tabBarLabel: 'Settings' }}
//             />
//             <Tab.Screen
//                 name="TodoTab"
//                 component={Todo}
//                 options={{ tabBarLabel: 'Add Task' }}
//             />
//             <Tab.Screen
//                 name="More"
//                 component={MoreStack}
//                 options={{ tabBarLabel: 'More' }}
//             />
//         </Tab.Navigator>
//     );

// }
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Todo from '../screens/Todo';
import ViewProduct from '../screens/product/view-product';
import Icon from 'react-native-vector-icons/Ionicons';
import MoreScreen from '../screens/more';
import CampaignScreen from '../screens/campaign/campaigns';
import CampaignDetailsScreen from '../screens/campaign/CampaignDetailsScreen';
import LoginScreen from '../screens/auth/Login';
import ComingSoonScreen from '../screens/CommingSoon';
import GiftingScreen from '../screens/gifting/GiftingScreen';
import GiftDetailsScreen from '../screens/gifting/GiftDetailsScreen';
import ProductsScreen from '../screens/product/products';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home and related screens
const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ViewProduct" component={ViewProduct} options={{ title: 'Product Details' }} />
        <Stack.Screen name="Campaign" component={CampaignScreen} options={{ title: 'Campaign' }} />
        <Stack.Screen name="CampaignDetails" component={CampaignDetailsScreen} options={{ title: 'Campaign Manage' }}/>
    </Stack.Navigator>
);

// Stack for Profile
const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
);

// Stack for Settings
const SettingsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
);

// Stack for More options
const MoreStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="More" component={MoreScreen} options={{ title: 'More' }} />
        <Stack.Screen name="Campaign" component={CampaignScreen} options={{ title: 'Campaign' }} />
        <Stack.Screen name="CampaignDetails" component={CampaignDetailsScreen} options={{ title: 'Campaign Manage' }} />
        <Stack.Screen name="Gifting" component={GiftingScreen} options={{ title: 'Gifting' }} />
        <Stack.Screen name="GiftDetails" component={GiftDetailsScreen} options={{ title: 'Gift Manage' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="ViewProduct" component={ViewProduct} options={{ title: 'Product Details' }} />
        <Stack.Screen name="ComingSoon" component={ComingSoonScreen} options={{ title: 'Coming Soon' }} />
    </Stack.Navigator>
);

// Bottom Tabs Navigator
const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                position: 'fixed',
                bottom: 10,
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
                if (route.name === 'HomeTab') iconName = 'home-outline';
                else if (route.name === 'ProfileTab') iconName = 'person-outline';
                else if (route.name === 'SettingsTab') iconName = 'settings-outline';
                else if (route.name === 'TodoTab') iconName = 'add-circle-outline';
                else if (route.name === 'More') iconName = 'ellipsis-horizontal-outline';
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007BFF',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ tabBarLabel: 'Profile' }} />
        <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ tabBarLabel: 'Settings' }} />
        <Tab.Screen name="TodoTab" component={Todo} options={{ tabBarLabel: 'Add Task' }} />
        <Tab.Screen name="More" component={MoreStack} options={{ tabBarLabel: 'More' }} />
    </Tab.Navigator>
);

export default function AppNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state

    const handleLogin = () => {
        setIsLoggedIn(true); // Simulate login
    };

    return (
            <>
            {isLoggedIn ? (
                <TabNavigator />
            ) : (
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        options={{ headerShown: false }}
                        >
                        {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )}
            </>
    );
}

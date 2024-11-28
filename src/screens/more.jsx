import React from 'react';
import { Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ComingSoonScreen from './CommingSoon';

const modules = [
    { id: '1', name: 'Campaigns', icon: 'bullhorn-outline', screen: 'Campaign' },
    { id: '2', name: 'Gifting', icon: 'gift-outline' ,screen:'Gifting'},
    { id: '11', name: 'Products', icon: 'cube-outline',screen:'Products' },
    { id: '3', name: 'Rewards', icon: 'trophy-outline' },
    { id: '4', name: 'Brand Stores', icon: 'storefront-outline' },
    { id: '5', name: 'Inventory', icon: 'cube-outline' },
    { id: '6', name: 'Warehouse', icon: 'home-outline' },
    { id: '7', name: 'Design Reviews', icon: 'pencil-outline' },
    { id: '8', name: 'Storage Estimator', icon: 'calculator-outline' },
    { id: '9', name: 'Contacts', icon: 'people-outline' },
    { id: '10', name: 'Swag', icon: 'shirt-outline' },
    { id: '12', name: 'Gift Cards', icon: 'card-outline' },
    { id: '13', name: 'Visa Cards', icon: 'card-outline' },
    { id: '14', name: 'Access Token', icon: 'key-outline' },
    { id: '15', name: 'App Marketplace', icon: 'apps-outline' },
    { id: '16', name: 'Automations', icon: 'settings-outline' },
    { id: '17', name: 'Users', icon: 'person-outline' },
    { id: '18', name: 'More', icon: 'dots-horizontal-circle-outline' },
];

const MoreScreen = () => {
    const navigation = useNavigation();

    const handleModulePress = (screen) => {
        if (screen) {
            navigation.navigate(screen); // Navigate to the defined screen
        } else {
            navigation.navigate('ComingSoon'); // Navigate to the defined screen
            // alert('This module does not have a screen yet!');
        }
    };

    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.img}>
                <Image
                    source={require('@/assets/images/BlinkSwag.png')}
                    style={styles.reactLogo}
                />
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.heading}>These are modules</Text>
                <FlatList
                    data={modules}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.module}
                            onPress={() => handleModulePress(item.screen)}
                        >
                            <Icon name={item.icon} size={50} color="#7134c7" style={styles.icon} />
                            <Text style={styles.moduleName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    scrollEnabled={false} // Disable FlatList's scroll
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    reactLogo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    module: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        marginBottom: 10,
    },
    moduleName: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
});

export default MoreScreen;

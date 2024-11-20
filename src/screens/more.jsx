import React from 'react';
import { Image, ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Add vector icons library

const modules = [
    { id: '1', name: 'Campaigns', icon: 'bullhorn-outline' },
    { id: '2', name: 'Gifting', icon: 'gift-outline' },
    { id: '3', name: 'Rewards', icon: 'trophy-outline' },
    { id: '4', name: 'Brand Stores', icon: 'storefront-outline' },
    { id: '5', name: 'Inventory', icon: 'archive-outline' },
    { id: '6', name: 'Campaigns', icon: 'bullhorn-outline' },
    { id: '7', name: 'Gifting', icon: 'gift-outline' },
    { id: '8', name: 'Rewards', icon: 'trophy-outline' },
    { id: '9', name: 'Brand Stores', icon: 'storefront-outline' },
    { id: '10', name: 'Inventory', icon: 'archive-outline' },
    { id: '9', name: 'Brand Stores', icon: 'storefront-outline' },
    { id: '7', name: 'Gifting', icon: 'gift-outline' },
    { id: '8', name: 'Rewards', icon: 'trophy-outline' },
    { id: '11', name: 'Inventory', icon: 'archive-outline' },
    { id: '12', name: 'More', icon: 'dots-horizontal-circle-outline' },
];

const MoreScreen = () => {
    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles?.img}>
                <Image
                    source={require('@/assets/images/BlinkSwag.png')}
                    style={styles.reactLogo}
                />
            </View>
            <Text style={styles.heading}>These are modules</Text>

            <ScrollView>
                <FlatList
                    data={modules}
                    numColumns={3} // Display icons in a grid
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.module}>
                            <Icon name={item.icon} size={50} color="#7134c7" style={styles.icon} />
                            <Text style={styles.moduleName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
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
        alignItems: 'center', // Centers the image horizontally
        justifyContent: 'center', // Centers the image vertically
        width: '100%', // Full width
        marginBottom: 20, // Add space below the image
    },
    reactLogo: {
        width: '100%', // Full width
        height: 200, // Fixed height
        resizeMode: 'contain', // Ensure the image retains its aspect ratio
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

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {

    const openProduct = (product) => {
        navigation.navigate('ViewProduct', { product }); // Correct navigation
    };
    const users = [
        {
            name: 'Product 1',
            price:23,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112254.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 2',
            price:20,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060106774.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 3',
            price:90,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112166.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 4',
            price:100,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112254.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 5',
            price:40,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112166.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ]
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome Ravi!</Text>
                {
                    users.map((u, i) => {
                        return (
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={() => openProduct(u)}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.text}>{u.name}</Text>
                                <Text style={styles.desc}>{u.desc}</Text>
                            </View>
                        );
                    })
                }

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        // textAlign: 'center', // Center text alignment
        color: '#333',
    },
    desc: {
        fontSize: 16,
        marginVertical: 10,
        lineHeight: 22,
        textAlign: 'justify',
        color: '#555',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
        padding: 15,
        width: '95%',
        alignSelf: 'center',
    },
});

export default HomeScreen;

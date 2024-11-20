import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const HomeScreen = () => {
    const users = [
        {
            name: 'brynn',
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112254.jpg'
        },
    ]
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Welcome to Home Screen!</Text> */}
            {
                users.map((u, i) => {
                    return (
                        <View key={i} >
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}

                            />
                            <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default HomeScreen;

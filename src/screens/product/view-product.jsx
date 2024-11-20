import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ViewProduct = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: product.avatar }}
            />
            <Text style={styles.text}>Name: {product.name}</Text>
            <Text style={styles.text}>Price: {product.price}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 1,
            }}>Description: </Text>
            <Text style={styles.desc}>{product.desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    desc: {
        fontSize: 16,
        marginTop: 10,
        lineHeight: 22,
    },
});

export default ViewProduct;

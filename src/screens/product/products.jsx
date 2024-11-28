import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = () => {
    const navigation = useNavigation(); // To handle navigation

    // Dummy data for gifting items
    const gifts = [
        {
            id: '1',
            title: 'Luxury Mug',
            recipient: 'Ravi',
            email: 'ravi@blinkswag.com',
            date: 'Nov 22, 2024',
            status: 'Delivered',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/happy_birthday/birthday_4.jpeg',
        },
        {
            id: '2',
            title: 'Anniversary Card',
            recipient: 'Chandar',
            email: 'chandar@blinkswag.com',
            date: 'Nov 22, 2024',
            status: 'Pending',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/thank_you/thank_you_12.jpeg',
        },
        {
            id: '3',
            title: 'Gift Basket',
            recipient: 'Test',
            email: 'test@blinkswag.com',
            date: 'Nov 20, 2024',
            status: 'Delivered',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/anniversary/anniversary_4.jpeg',
        },
        {
            id: '4',
            title: 'Swag Box',
            recipient: 'John',
            email: 'john@blinkswag.com',
            date: 'Nov 18, 2024',
            status: 'Pending',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/thank_you/thank_you_10.jpeg',
        },
        {
            id: '5',
            title: 'Thank you',
            recipient: 'Sanjay',
            email: 'sanjay@blinkswag.com',
            date: 'Feb 08, 2024',
            status: 'Delivered',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/happy_birthday/birthday_5.jpeg',
        },
        {
            id: '6',
            title: 'Birthday',
            recipient: 'Waqas',
            email: 'waqas@blinkswag.com',
            date: 'Jan 22, 2024',
            status: 'Delivered',
            image: 'https://dashboard-prod.blinkswag.com/storage/GiftCards/happy_birthday/birthday_2.jpeg',
        },
    ];
    const Products = [
        {
            name: 'Product 1',
            price: 23,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112254.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 2',
            price: 20,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060106774.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 3',
            price: 90,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112166.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 4',
            price: 100,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112254.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: 'Product 5',
            price: 40,
            avatar: 'https://dashboard-assets.blinkswag.com/storage/ItemImages/1316483000060112166.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ]


    const renderProductCard = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.card,
                'Delivered' === 'Delivered' ? styles.deliveredCard : styles.pendingCard,
            ]}
            onPress={() =>
                navigation.navigate('ViewProduct', { product: item })
            }
        >
            <Image source={{ uri: item.avatar }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.recipient}>Price: {item.price}</Text>
            <Text style={styles.recipient}>Description: {item.desc}</Text>
            <Text
                style={[
                    styles.status,
                    'Delivered' === 'Delivered' ? styles.deliveredStatus : styles.pendingStatus,
                ]}
            >
                {'Active'}
            </Text>
        </TouchableOpacity>
    );

    const renderHeader = () => (
        <View>
            <Text style={styles.header}>Your Products</Text>
        </View>
    );

    return (
        <>
            <FlatList
                data={Products}
                renderItem={renderProductCard}
                keyExtractor={(item) => item.name
                    
                }
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.row}
                ListHeaderComponent={renderHeader} // Add header at the top
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    list: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        width: '46%', // Adjust width for spacing
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginHorizontal: '2%',
        padding: 10,
    },
    deliveredCard: {
        borderWidth: 2,
        borderColor: '#4caf50',
    },
    pendingCard: {
        borderWidth: 2,
        borderColor: '#f44336',
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    recipient: {
        fontSize: 14,
        color: '#757575',
        marginTop: 5,
    },
    email: {
        fontSize: 12,
        color: '#9e9e9e',
        marginTop: 5,
    },
    date: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 5,
        marginBottom: 5,
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 5,
    },
    deliveredStatus: {
        backgroundColor: '#E9FCE9',
        color: '#4caf50',
    },
    pendingStatus: {
        backgroundColor: '#FFE9E9',
        color: '#f44336',
    },
});

export default ProductsScreen;

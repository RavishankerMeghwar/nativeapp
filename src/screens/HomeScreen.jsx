import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { LineChart } from 'react-native-chart-kit';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/Header';
import TopBar from '../../components/header/TopBar';
const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const screenWidth = Dimensions.get('window').width;
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [50, 80, 90, 100, 150, 200],
                strokeWidth: 2,
            },
        ],
    };
    const chartConfig = {
        backgroundColor: '#1E2923',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0, // Number of decimal places in data
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Line color
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
        style: {
            borderRadius: 16,
        },
    };
    const openProduct = (product) => {
        navigation.navigate('ViewProduct', { product }); // Correct navigation
    };
    const users = [
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
    const dummyData = [
        {
            id: '1',
            title: 'TOTAL SPENT',
            value: '$2484.14',
            subtitle: '$2484.14 new in this month',
            icon: '💲', // Placeholder for icon
            color: '#6A5ACD',
        },
        {
            id: '2',
            title: 'TOTAL ORDERS',
            value: '71',
            subtitle: '35 new in this month',
            icon: '📦',
            color: '#9370DB',
        },
        {
            id: '3',
            title: 'PENDING ORDERS',
            value: '0',
            subtitle: '0 new in this month',
            icon: '⏳',
            color: '#FF8C00',
        },
        {
            id: '4',
            title: 'TOTAL RECIPIENTS',
            value: '11',
            subtitle: '11 new in this month',
            icon: '👤',
            color: '#4B0082',
        },
    ];
    const campaigns = [
        {
            id: '1',
            title: 'testCompany123',
            subtitle: 'testCampaign123',
            daysAgo: '3 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/1732209196105_0.jpg',
        },
        {
            id: '2',
            title: 'testCompany',
            subtitle: 'test',
            daysAgo: '5 days ago',
            status: 'InActive',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/1728405033050_0.jpg',
        },
        {
            id: '3',
            title: 'testCompany',
            subtitle: 'testCampaign',
            daysAgo: '5 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/1731667669429_0.jpg',
        },
        {
            id: '4',
            title: 'Swag',
            subtitle: 'BlinkSwag Test October',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/108_banner.png',
        },
        {
            id: '5',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/127_banner.jpg',
        },
        {
            id: '6',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/129_banner.jpg',
        },
        {
            id: '7',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/127_banner.jpg',
        },
        {
            id: '8',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/129_banner.jpg',
        },
        {
            id: '9',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/127_banner.jpg',
        },
        {
            id: '10',
            title: 'Employees',
            subtitle: 'Employees of the year',
            daysAgo: '7 days ago',
            status: 'Active',
            image: 'https://dashboard-prod.blinkswag.com/storage/redeempage/129_banner.jpg',
        },
    ];
    const Card = ({ title, value, subtitle, icon, color }) => {
        return (
            <View style={[styles.card1, { borderColor: color }]}>
                <View style={styles.cardHeader1}>
                    <Text style={[styles.icon1, { color }]}>{icon}</Text>
                    <Text style={styles.title1}>{title}</Text>
                </View>
                <Text style={styles.value1}>{value}</Text>
                <Text style={styles.subtitle1}>{subtitle}</Text>
            </View>
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.card1}>
            <TouchableOpacity onPress={() => openProduct(item)}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.avatar }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </View>
    );
    return (
        <>
            <TopBar />
            <ScrollView>
                <Text style={styles.text}>Welcome Ravi!</Text>

                <View style={styles.container1}>
                    <FlatList
                        data={dummyData}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Card
                                title={item.title}
                                value={item.value}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                color={item.color}
                            />
                        )}
                    />

                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Monthly Sales</Text>
                    <LineChart
                        data={chartData}
                        width={screenWidth - 20} // Chart width
                        height={250} // Chart height
                        chartConfig={chartConfig}
                        bezier // Smooth curved line
                        style={styles.chart}
                    />
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title}>Select a Date</Text>

                    <Calendar
                        // Initially selected date (optional)
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#007BFF' },
                        }}
                        onDayPress={onDayPress}
                        monthFormat={'yyyy MM'}
                        hideExtraDays={true} // Hide the extra days of the previous/next month
                    />

                    <Text style={styles.selectedDate}>
                        {selectedDate ? `Selected Date: ${selectedDate}` : 'No date selected'}
                    </Text>
                </View>

                <Text style={styles.text}>Products</Text>
                <View style={styles.container}>
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <TouchableOpacity onPress={() => openProduct(item)}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: item.avatar }}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.desc}>{item.desc}</Text>
                            </View>
                        )}
                    />

                </View>
                <Text style={styles.text}>Campaigns</Text>
                <View style={styles.container}>
                    <FlatList
                        data={campaigns}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.card,
                                    item.status === 'Active' ? styles.activeCard : styles.inactiveCard,
                                ]}
                                onPress={() =>
                                    navigation.navigate('CampaignDetails', { campaign: item })
                                } // Navigate to details
                            >
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.statusContainer}>
                                    <Text
                                        style={[
                                            styles.status,
                                            item.status === 'Active' ? styles.activeStatus : styles.inactiveStatus,
                                        ]}
                                    >
                                        {item.status}
                                    </Text>
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>{item.subtitle}</Text>
                                <Text style={styles.daysAgo}>{item.daysAgo}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    container1: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingVertical: 20,
    },
    container2: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingVertical: 20,
        padding: 20,

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        paddingLeft: 10,
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
        width: 270,
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
    },
    card1: {
        width: 140,
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
    },
    cardHeader1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon1: {
        fontSize: 18,
        marginRight: 5,
    },
    title1: {
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
    },
    value1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000',
    },
    subtitle1: {
        fontSize: 12,
        color: '#888',
    },
    activeCard: {
        borderWidth: 2,
        borderColor: '#4caf50',
    },
    inactiveCard: {
        borderWidth: 2,
        borderColor: '#f44336',
    },
    statusContainer: {
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 1,
        marginLeft: 1,
    },
    status: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    activeStatus: {
        color: '#4caf50',
    },
    inactiveStatus: {
        color: '#f44336',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 10,
        marginTop: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#757575',
        marginHorizontal: 10,
        marginTop: 4,
    },
    daysAgo: {
        fontSize: 12,
        color: '#9e9e9e',
        marginHorizontal: 10,
        marginTop: 4,
        marginBottom: 10,
    },
});

export default HomeScreen;

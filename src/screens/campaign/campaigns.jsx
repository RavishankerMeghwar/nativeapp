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

const CampaignScreen = () => {
    const navigation = useNavigation(); // To handle navigation

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
            status: 'InActive',
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
            status: 'InActive',
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

    const renderCampaignCard = ({ item }) => (
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
    );

    const renderHeader = () => (
        <View>
            <Text style={styles.header}>Your Campaigns</Text>
        </View>
    );

    return (
        <FlatList
            data={campaigns}
            renderItem={renderCampaignCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.list}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={renderHeader} // Add header at the top
        />
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
    },
    activeCard: {
        borderWidth: 2,
        borderColor: '#4caf50',
    },
    inactiveCard: {
        borderWidth: 2,
        borderColor: '#f44336',
    },
    image: {
        width: '100%',
        height: 120,
    },
    statusContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
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

export default CampaignScreen;

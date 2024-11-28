import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Switch, ScrollView } from 'react-native';

const CampaignDetailsScreen = ({ route }) => {
    const { campaign } = route.params;

    // Dummy data for the table
    const tableData = [
        {
            email: 'sajjad@blinkswag.com',
            consumed: 'Funds Consumed',
            limit: '$100',
            status: 'Inactive',
        },
        {
            email: 'john.doe@example.com',
            consumed: 'Funds Consumed',
            limit: '$250',
            status: 'Active',
        },
    ];

    const renderRow = ({ item }) => (
        <View style={styles.tableRow}>

            <Text style={styles.tableCell} numberOfLines={1} ellipsizeMode="tail">
                {item.email}
            </Text>
            <Text style={styles.tableCell} numberOfLines={1} ellipsizeMode="tail">
                {item.consumed}
            </Text>
            <Text style={styles.tableCell} numberOfLines={1} ellipsizeMode="tail">
                {item.limit}
            </Text>
            <View style={[styles.tableCell, styles.statusCell]}>
                <Text
                    style={[
                        styles.statusText,
                        item.status === 'Active' ? styles.activeStatus : styles.inactiveStatus,
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {item.status}
                </Text>
                <Switch
                    value={item.status === 'Active'}
                    onValueChange={() => console.log(`Toggled status for ${item.email}`)}
                />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Campaign Details */}
            <Image source={{ uri: campaign.image }} style={styles.image} />
            <Text style={styles.title}>{campaign.title}</Text>
            <Text style={styles.subtitle}>{campaign.subtitle}</Text>
            <Text style={styles.status}>Status: {campaign.status}</Text>
            <Text style={styles.daysAgo}>Created: {campaign.daysAgo}</Text>

            {/* Table Section */}
            <View style={styles.tableContainer}>
                <ScrollView horizontal={true}>
                    <View>
                        {/* Table Header */}
                        <View style={styles.tableHeader}>
                            {/* Adjust columns as needed */}
                            {/* Uncomment the linkCell if needed */}
                            {/* <Text style={[styles.tableCell, styles.linkCell]}>Campaign link</Text> */}
                            <Text style={styles.tableCell}>E-mail address</Text>
                            <Text style={styles.tableCell}>Consumed</Text>
                            <Text style={styles.tableCell}>Limit</Text>
                            <Text style={[styles.tableCell, styles.statusCell]}>Status</Text>
                        </View>
                        {/* Table Rows */}
                        <FlatList
                            data={tableData}
                            renderItem={renderRow}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.tableContent}
                        />
                    </View>
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#757575',
        marginBottom: 20,
    },
    status: {
        fontSize: 16,
        marginBottom: 10,
    },
    daysAgo: {
        fontSize: 14,
        color: '#9e9e9e',
    },
    tableContainer: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 5,
        overflow: 'hidden',
        minWidth: 500, // Ensure the header is wide enough for all columns
      },
      tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        minWidth: 500, // Matches header width for consistent scrolling
      },
      tableCell: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        paddingHorizontal: 10, // Add padding for readability
      },
      
    linkCell: {
        flex: 1.5, // Slightly wider for the link column
    },
    statusCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
    },
    activeStatus: {
        color: '#4caf50',
    },
    inactiveStatus: {
        color: '#f44336',
    },
});

export default CampaignDetailsScreen;

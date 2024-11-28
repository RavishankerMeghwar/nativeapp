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

const GiftingScreen = () => {
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

  const renderGiftCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        item.status === 'Delivered' ? styles.deliveredCard : styles.pendingCard,
      ]}
      onPress={() =>
        navigation.navigate('GiftDetails', { gift: item })
      } // Navigate to details
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.recipient}>To: {item.recipient}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text
        style={[
          styles.status,
          item.status === 'Delivered' ? styles.deliveredStatus : styles.pendingStatus,
        ]}
      >
        {item.status}
      </Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View>
      <Text style={styles.header}>Your Gifts</Text>
    </View>
  );

  return (
    <FlatList
      data={gifts}
      renderItem={renderGiftCard}
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

export default GiftingScreen;

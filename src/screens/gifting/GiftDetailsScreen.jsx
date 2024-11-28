import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const GiftDetailsScreen = ({ route, navigation }) => {
  // Receiving data from the navigation route
  const { gift } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image source={{ uri: gift.image }} style={styles.image} />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{gift.title}</Text>
        <Text style={styles.subtitle}>To: {gift.recipient}</Text>
        <Text style={styles.email}>{gift.email}</Text>
        <Text style={styles.date}>Date: {gift.date}</Text>

        {/* Status Badge */}
        <View
          style={[
            styles.statusBadge,
            gift.status === 'Delivered' ? styles.deliveredBadge : styles.pendingBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              gift.status === 'Delivered' ? styles.deliveredText : styles.pendingText,
            ]}
          >
            {gift.status}
          </Text>
        </View>

        {/* Additional Description */}
        <Text style={styles.description}>
          This is a detailed description of the gift. You can customize this section to show
          any additional information or context about the selected gift.
        </Text>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
        >
          <Text style={styles.backButtonText}>Back to Gifts</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 20,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  deliveredBadge: {
    backgroundColor: '#E9FCE9',
  },
  pendingBadge: {
    backgroundColor: '#FFE9E9',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  deliveredText: {
    color: '#4caf50',
  },
  pendingText: {
    color: '#f44336',
  },
  description: {
    fontSize: 16,
    color: '#757575',
    lineHeight: 24,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GiftDetailsScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, Picker } from 'react-native';

const SettingScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationsEnabled1, setNotificationsEnabled1] = useState(false);
  const [notificationsEnabled2, setNotificationsEnabled2] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [userAccess, setUserAccess] = useState('basic'); // Default user access level

  const handleSaveSettings = () => {
    Alert.alert('Settings Updated', 'Your preferences have been saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? '#4CAF50' : '#ccc'}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Order Notifications</Text>
        <Switch
          value={notificationsEnabled1}
          onValueChange={setNotificationsEnabled1}
          thumbColor={notificationsEnabled1 ? '#4CAF50' : '#ccc'}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Estimate Notifications</Text>
        <Switch
          value={notificationsEnabled2}
          onValueChange={setNotificationsEnabled2}
          thumbColor={notificationsEnabled2 ? '#4CAF50' : '#ccc'}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          thumbColor={darkModeEnabled ? '#4CAF50' : '#ccc'}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>User Access Level</Text>
        <View style={styles.pickerContainer}>
          {/* <Picker
            selectedValue={userAccess}
            onValueChange={(itemValue) => setUserAccess(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Customer" value="customer" />
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="Super Admin" value="superadmin" />
          </Picker> */}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSaveSettings}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingLabel: {
    fontSize: 16,
    color: '#555',
  },
  pickerContainer: {
    width: '50%',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingScreen;

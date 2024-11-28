import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';

export default function Todo() {

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    status: '',
  });

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setMessage(''), 2000);
    return () => clearTimeout(timer);
  }, [message]);

  const handleInputChange = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
    setStatus(value);
  };

  const showToast = (msg) => {
    Toast.show({
      type: 'success',
      text1: msg,
      text2: message,
      visibilityTime: 4000,
      autoHide: true,
    });
  };

  const addUser = () => {
    const { fullName, email, phone, status } = userData;

    if (!fullName || !email || !phone || !status) {
      showToast('All fields are required.');
      setMessage('All fields are required.');
      return;
    }

    setUsers((prev) => [
      ...prev,
      { id: Date.now().toString(), fullName, email, phone, status },
    ]);
    showToast('User added successfully!');
    setUserData({ fullName: '', email: '', phone: '', status: '' });
  };

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    showToast('User removed successfully.');
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.reactLogo}
          />
        }
      >
        {/* User Input Form */}
        <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={userData.fullName}
            onChangeText={(value) => handleInputChange('fullName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={userData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            value={userData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
          />
          <DropDownPicker
            open={open}
            value={status}
            items={items}
            setOpen={setOpen}
            setValue={setStatus}
            setItems={setItems}
            placeholder="Select Status"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            onChangeValue={(value) => handleInputChange('status', value)}
          />
          <Button title="Add User" onPress={addUser} color="#4CAF50" />
        </KeyboardAvoidingView>

        {/* Table with User Data */}
        <View style={styles.tableContainer}>
          <ScrollView horizontal>
            <View>
              {/* Table Header */}
              <View style={styles.tableHeader}>
                <Text style={[styles.tableCell, styles.linkCell]}>Full Name</Text>
                <Text style={styles.tableCell}>Email</Text>
                <Text style={styles.tableCell}>Phone</Text>
                <Text style={[styles.tableCell, styles.statusCell]}>Status</Text>
                <Text style={styles.tableCell}>Action</Text>
              </View>

              {/* Table Rows */}
              <FlatList
                data={users}
                renderItem={({ item }) => (
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.linkCell]}>{item.fullName}</Text>
                    <Text style={styles.tableCell}>{item.email}</Text>
                    <Text style={styles.tableCell}>{item.phone}</Text>
                    <Text
                      style={[
                        styles.tableCell,
                        item.status.toLowerCase() === 'active'
                          ? styles.activeStatus
                          : styles.inactiveStatus,
                      ]}
                    >
                      {item.status}
                    </Text>
                    <TouchableOpacity onPress={() => removeUser(item.id)} style={styles.iconContainer}>
                      <Icon name="delete" size={24} color="#f44336" />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                nestedScrollEnabled
              />
            </View>
          </ScrollView>
        </View>

        {/* Toast Component */}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  tableContainer: {
    marginTop: 20,
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
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  linkCell: {
    flex: 1.5,
  },
  statusCell: {
    flex: 1,
  },
  activeStatus: {
    color: '#4caf50',
  },
  inactiveStatus: {
    color: '#f44336',
  },
  reactLogo: {
    width: 390,
    height: 50,
    position: 'absolute',
    bottom: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

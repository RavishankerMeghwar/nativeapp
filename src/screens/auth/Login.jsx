// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const LoginScreen = ({ navigation, onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//       onLogin();
//       return // Call the parent-provided onLogin function
//     if (!email || !password) {
//       Alert.alert('Error', 'Both fields are required.');
//       return;
//     }

//     if (email === 'ravi@blinkswag.com' && password === '1234') {
//       Alert.alert('Success', 'Login successful!');
//       navigation.replace('Main'); // Navigate to the main app (Tab Navigator)
//     } else {
//       Alert.alert('Error', 'Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     width: '100%',
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;


import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../src/colors';
import { CustomInputField, CustomPasswordField } from '../../../components';

import { ActivityIndicator, Button, Checkbox, Snackbar } from 'react-native-paper';
import axios from 'axios';
import { base_url } from '../../globals';
import { useDispatch } from 'react-redux';
import { login } from '../../my-store/reducer';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const validate = () => {
    let flag = true;

    let reqMsg = 'Field is required!';
    let msg = 'Please provide valid email address!';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      setEmailError(reqMsg);
      flag = false;
    } else if (reg.test(email) === false) {
      setEmailError(msg);
      flag = false;
    } else if (password == '') {
      setPasswordError(reqMsg);
      flag = false
    }

    return flag;
  }

  const handleLogin = (type) => {
    setPasswordError('');
    setEmailError('');
    let data;
    if (type === "guest") {
      data = {
        type: 'guest'
      }
      setMessage("Guest signin in pending..")
      return;
      setGuestLoading(true);
    } else if (!validate()) {
      return;
    } else {
      data = {
        email: email,
        password: password,
      }
      setIsLoading(true);
    }
    axios.post(base_url + 'auth.php?action=login', data)
      .then(res => {
        let data = {
          data: res?.data?.user,
          token: res?.data?.token
        }
        if (type === "guest") {
          setGuestLoading(false);
        } else {
          setIsLoading(false);
        }
        dispatch(login(data));
        AsyncStorage.setItem('access_token', res?.data?.token);
        AsyncStorage.setItem('user_id', JSON.stringify(res?.data?.user?.id));
      }).catch(err => {
        setVisible(true);
        if (err?.response?.status == 422) {
          setIsLoading(false);
          Object.entries(err?.response?.data?.detail).map(err => {
            setMessage(err[1]);
          })
        } else {
          setMessage(err?.response?.data?.message)
        }
        if (type === "guest") {
          setGuestLoading(false);
        } else {
          setIsLoading(false);
        }
      })

  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView>
        <View>
          <View style={[styles.imgWrap]}
          >
            <Image
              style={[styles.imgSty]}
              source={
                require('../../assets/images/logo_2.png')
              }
            />
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <CustomInputField
              placeholderTxt='Email'
              padType='email-address'
              inputError={emailError}
              handleInput={setEmail}
            />
            <CustomPasswordField
              placeholderTxt='Password'
              inputError={passwordError}
              handleInput={setPassword}
            />
            <View style={[styles.checkBtnStyles]}
            >
              <View style={[styles.rowCenter]}>
                <Checkbox.Android
                  color="#fcb919"
                  uncheckedColor='#B6B6B6'
                  status={isTermsChecked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setIsTermsChecked(!isTermsChecked);
                  }}
                />
                <TouchableWithoutFeedback
                  onPress={() => {
                    setIsTermsChecked(!isTermsChecked);
                  }}
                >
                  <Text style={{ color: "#B6B6B6" }}>Remember Me</Text>
                </TouchableWithoutFeedback>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}
              >
                <Text style={[styles.forgotPassTxt]}>Forget Password</Text>
              </TouchableOpacity>
            </View>
            <Button
              mode='contained'
              disabled={isLoading || guestLoading}
              uppercase={false}
              labelStyle={{
                padding: 4,
                color: '#fff'
              }}
              loading={isLoading}
              onPress={() => {
                handleLogin("")
              }}
            >
              <Text style={styles.btnText}>Sign in</Text>
            </Button>
            <TouchableHighlight
              activeOpacity={1}
              disabled={guestLoading || isLoading}
              underlayColor="#333333"
              onPress={() => {
                handleLogin("guest")
              }}
              style={[styles.signUpButtonContainer, { backgroundColor: "black" }]}
            >
              <View style={[styles.rowCenterCenter]}>
                {guestLoading &&
                  <ActivityIndicator animation={true} style={{ marginRight: 5 }} size={18} color="#fff" />
                }
                <Image
                  style={[styles.guestIcon]}
                  source={require('../../assets/images/UserGear.png')}
                />
                <Text style={styles.btnText}>Guest Sign in</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 15,
              marginTop: 90,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14, color: COLORS.lightGrey, fontFamily: 'Inter-Regular' }}>Don't Have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{ fontSize: 14, color: "#FCB919", paddingLeft: 5 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'close',
          onPress: () => {
            setVisible(false);
          }
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    lineHeight: 18,
  },
  signUpButtonContainer: {
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 17
  },
  btnText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: 'Inter-Regular'
  },
  imgWrap: {
    marginVertical: "auto",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 26,
  },
  imgSty: {
    // width: 200,
    // height: 50
  },
  checkBtnStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "space-between"
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center"
  },
  forgotPassTxt: {
    color: "#ef4a23",
    fontFamily: "Inter-Regular",
    fontSize: 13,
  },
  guestIcon: {
    width: 23,
    height: 23,
    marginRight: 8
  },
  rowCenterCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    user: null,
    isLoggedIn: false,
    isAuthenticated: false,
    accessToken: null,
}

export const myReducer = createSlice({
    name: 'storeReducer',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.data;
            state.accessToken = action.payload.token;
        },
        register: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.data;
            state.accessToken = action.payload.token;
        },
        logout: (state) => {
            state.accessToken = null;
            state.user = null;
            AsyncStorage.removeItem('access_token');
            AsyncStorage.removeItem('user_id');
            state.isLoggedIn = false;
        },
    },
})

export const {
    login,
    register,
    logout,
} = myReducer.actions

export default myReducer.reducer
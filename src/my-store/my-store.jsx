import { configureStore } from '@reduxjs/toolkit'
import myReducer from './reducer';

export const myStore = configureStore({
    reducer: {
        storeReducer: myReducer
    },
})
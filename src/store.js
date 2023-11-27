import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
const store = configureStore({
  reducer: {
    myCounter: counterReducer,
  },
});
export default store;

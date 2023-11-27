import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 20,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increment, decrement } = actions;

export default reducer;

import React from 'react';
import { increment, decrement } from './counterSlice';
import { useDispatch } from 'react-redux';

export const Button = () => {
  const dispatch = useDispatch();
  return (
    <div className='btns'>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

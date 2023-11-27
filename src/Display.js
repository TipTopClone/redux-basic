import React from 'react';
import { useSelector } from 'react-redux';

export const Display = () => {
  const { counter } = useSelector((state) => state.myCounter);
  return <div>{counter}</div>;
};

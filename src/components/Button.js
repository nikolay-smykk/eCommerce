import React from 'react';
import { useSelector } from 'react-redux';

const Button = () => {
  const cartItem = useSelector((state) => state.carItem);
  console.log(cartItem);
  return <div>Some Button</div>;
};

export default Button;

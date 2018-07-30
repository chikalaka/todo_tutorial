import React from 'react';

const MyButton = ({onClick, className, text}) => (
  <button className={`MyButton ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default MyButton;

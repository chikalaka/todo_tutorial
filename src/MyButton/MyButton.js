import React from 'react';

// MyButton class should be in the style.css of MyButton folder
const MyButton = ({onClick, className, text}) => (
  <button className={`MyButton ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default MyButton;

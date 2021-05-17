import './index.css';
import React from 'react';

const OptionItem = ({ src, text }) => {
  return (
    <div className="option-item">
      <img src={src} alt={text} />
      <div className="option-txt">{text}</div>
    </div>
  );
};

export default OptionItem;

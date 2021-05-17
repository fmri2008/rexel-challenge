import React from 'react';
import Arrow from '../../assets/ic/black/ic_arrow_forward.png';

const MenuItem = ({ icon, text, className = 'none' }) => {
  return (
    <div className={`menu-mobile-item ${className}`}>
      <div>
        <img src={icon} alt={text} />
      </div>
      <div>{text}</div>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default MenuItem;

import React from 'react';

const MenuItem = ({ icon, text, className = '' }) => {
  return (
    <div className={`menu-desktop-item ${className}`}>
      <div>
        <img src={icon} alt={text} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default MenuItem;

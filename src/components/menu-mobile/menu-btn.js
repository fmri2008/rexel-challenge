import './index.css';
import React from 'react';

const MenuBtn = ({ icon, text }) => {
  return (
    <div className="menu-mobile-btn-container">
      <div className="menu-mobile-btn">
        <img src={icon} alt={text} width="40px" height="40px" />
      </div>
      <div className="menu-mobile-btn-txt">{text}</div>
    </div>
  );
};

export default MenuBtn;

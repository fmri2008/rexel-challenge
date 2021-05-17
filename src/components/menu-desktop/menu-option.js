import React from 'react';

const MenuOption = ({ icon, text }) => {
  return (
    <div className="menu-desktop-option">
      <img src={icon} alt={text} />
      <div>{text}</div>
    </div>
  );
};

export default MenuOption;

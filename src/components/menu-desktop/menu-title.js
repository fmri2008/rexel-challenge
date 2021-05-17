import React from 'react';

const MenuTitle = ({ icon, text }) => {
  return (
    <div className="menu-desktop-title">
      <div>
        <img src={icon} alt={text} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default MenuTitle;

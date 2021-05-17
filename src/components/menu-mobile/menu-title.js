import React from 'react';
import Arrow from '../../assets/ic/black/ic_arrow_forward.png';

const MenuTitle = ({ icon, text }) => {
  return (
    <div className="menu-mobile-title">
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

export default MenuTitle;

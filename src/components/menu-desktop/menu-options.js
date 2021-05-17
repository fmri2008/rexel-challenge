import React from 'react';

import MenuOption from './menu-option';
import DataComm from '../../assets/img/datacomm.png';
import HVAC from '../../assets/img/hvac.png';
import Industrial from '../../assets/img/industrial.png';
import Lighting from '../../assets/img/lighting.png';
import Energy from '../../assets/img/energy.png';
import Utility from '../../assets/img/utility.png';

const MenuOptions = () => {
  return (
    <div className="menu-desktop-options-wrapper">
      <h2>Product Markets</h2>
      <div className="menu-desktop-options">
        <MenuOption icon={DataComm} text="DataComm" />
        <MenuOption icon={HVAC} text="HVAC" />
        <MenuOption icon={Industrial} text="Industrial" />
        <MenuOption icon={Lighting} text="Lighting" />
        <MenuOption icon={Energy} text="Energy Efficiency" />
        <MenuOption icon={Utility} text="Utility" />
      </div>
    </div>
  );
};

export default MenuOptions;

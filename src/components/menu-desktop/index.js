import './index.css';
import React from 'react';

import MenuTitle from './menu-title';
import MenuItem from './menu-item';
import MenuOptions from './menu-options';
import Category from '../../assets/ic/black/ic_categories.png';
import List from '../../assets/ic/black/ic_list.png';
import Catalog from '../../assets/ic/black/ic_playlist_add_check.png';
import Help from '../../assets/ic/green/ic_chat - active.png';
import PIM from '../../assets/ic/black/ic_check_circle.png';
import Account from '../../assets/ic/white/ic_person.png';
import Locations from '../../assets/ic/black/ic_place.png';

const MenuDesktop = () => {
  return (
    <div className="menu-desktop-container">
      <MenuTitle icon={Category} text="Shop all categories" />
      <div className="menu-desktop-items">
        <MenuItem icon={Catalog} text="My Catalog" />
        <MenuItem icon={List} text="My List" />
        <MenuItem className="right-item" icon={Help} text="Live Help" />
        <MenuItem icon={PIM} text="PIM" />
        <MenuItem className="account-item" icon={Account} text="Account" />
        <MenuItem
          className="right-item"
          icon={Locations}
          text="Branch Locations"
        />
      </div>
      <MenuOptions />
    </div>
  );
};

export default MenuDesktop;

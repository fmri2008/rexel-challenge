import './index.css';
import React from 'react';

import MenuTitle from './menu-title';
import MenuItem from './menu-item';
import MenuBtn from './menu-btn';
import Category from '../../assets/ic/black/ic_categories.png';
import List from '../../assets/ic/black/ic_list.png';
import Catalog from '../../assets/ic/black/ic_playlist_add_check.png';
import Help from '../../assets/ic/green/ic_chat - active.png';
import PIM from '../../assets/ic/black/ic_check_circle.png';
import Account from '../../assets/ic/white/ic_person.png';
import Locations from '../../assets/ic/black/ic_place.png';
import Search from '../../assets/ic/green/ic_search.png';
import Scanner from '../../assets/ic/green/ic_scanner.png';

const MenuMobile = () => {
  return (
    <div className="menu-mobile-container">
      <div className="menu-mobile-wrapper">
        <MenuTitle icon={Category} text="Shop all categories" />
        <MenuItem icon={Catalog} text="My Catalog" />
        <MenuItem icon={List} text="My List" />
        <MenuItem icon={Help} text="Live Help" />
        <MenuItem icon={PIM} text="PIM" />
        <MenuItem className="account-item" icon={Account} text="Account" />
        <MenuItem icon={Locations} text="Branch Locations" />
      </div>
      <div className="menu-mobile-btn-wrapper">
        <MenuBtn icon={Category} text="Categories" />
        <MenuBtn icon={Search} text="Search" />
        <MenuBtn icon={Scanner} text="Scanner" />
      </div>
    </div>
  );
};

export default MenuMobile;

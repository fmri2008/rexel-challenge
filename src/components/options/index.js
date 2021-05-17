import './index.css';
import React from 'react';
import OptionItem from './option-item';
import SuperToolDay from '../../assets/img/super-tool-day.png';
import Location from '../../assets/img/ic_location_b.png';
import Help from '../../assets/img/ic_helpcenter.png';
import Platt from '../../assets/img/ic_platt-u.png';

const Options = () => {
  return (
    <div className="option-wrapper">
      <OptionItem
        src={SuperToolDay}
        text={`Super Tool Day & Dynamic Data Day`}
      />
      <OptionItem src={Location} text="Branch Locations" />
      <OptionItem src={Help} text="Help Center" />
      <OptionItem src={Platt} text="Platt University" />
    </div>
  );
};

export default Options;

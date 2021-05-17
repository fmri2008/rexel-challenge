import './index.css';
import React from 'react';
import DealsAd from '../../assets/panel/deal.png';

const Deals = () => {
  return (
    <div className="deals-wrapper">
      <img className="deals-img" src={DealsAd} alt="deals" />
    </div>
  );
};

export default Deals;

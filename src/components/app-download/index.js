import './index.css';
import React from 'react';
import AppImg from '../../assets/panel/app-get-banner.png';

const AppDownload = () => {
  return (
    <div>
      <div className="app-download-wrapper">
        <img
          className="app-download-img"
          src={AppImg}
          alt="download Platt App"
        />
      </div>
      <h3 className="app-download-caption">
        Shop better, download the Platt App today
      </h3>
    </div>
  );
};

export default AppDownload;

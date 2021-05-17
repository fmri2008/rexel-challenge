import './index.css';
import React from 'react';
import RecentItem from './recent-item';
import RecentItem1 from '../../assets/recent/11.png';
import RecentItem2 from '../../assets/recent/22.png';

const Recent = () => {
  return (
    <div className="recent-wrapper">
      <div className="recent-title">
        <div>Recently Viewed</div>
        <div className="recent-viewall">View all</div>
      </div>
      <div className="recent-items-wrapper">
        <RecentItem src={RecentItem1} text="recent item 1" />
        <RecentItem src={RecentItem2} text="recent item 2" />
        <RecentItem src={RecentItem2} text="recent item 2" />
      </div>
    </div>
  );
};

export default Recent;

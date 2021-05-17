import React from 'react';

const RecentItem = ({ src, text }) => {
  return (
    <div>
      <img src={src} alt={text} />
    </div>
  );
};

export default RecentItem;

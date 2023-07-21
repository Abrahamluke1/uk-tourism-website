import React from 'react';

const ThreeDCard = ({ title, cover }) => {
  return (
    <div className="card">
      <div className="card__face card__face--front">
        <img src={cover} alt={title} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="card__face card__face--back">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ThreeDCard;

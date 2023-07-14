import React, { useState, useEffect } from 'react';
// import bigBen from '../assests\big-ben-g912243860_1280.jpg';
import castle from '../assests/castle-g429b98f21_1280.jpg';
import londonEye from '../assests/london-eye-gf53cbfb32_1280.jpg';
import tixall from '../assests/tixall-gateway-g66c042f7e_1280.jpg';
import towerBridge from '../assests/tower-bridge-g8cebec02e_1280.jpg';

const imageList = [ castle, londonEye, tixall, towerBridge];

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex+1) % imageList.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // clear interval on component unmount
  }, []);

  const cardStyle = {
    maxWidth: '1280px', // or your preferred width
    maxHeight: '720px', // or your preferred width
    margin: '0 auto', // centers the card horizontally
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // add some shadow
    borderRadius: '10px', // add some rounded borders
    overflow: 'hidden', // ensures the images fit within the rounded border
  };

  const containerStyle = {
    width: '100%',
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    transition: 'opacity 1s ease-in-out',
    opacity: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        {imageList.map((image, index) => (
          <img 
            src={image} 
            alt="slideshow" 
            style={{ 
              ...imageStyle,
              opacity: index === slideIndex ? 1 : 0, // only show the current image
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

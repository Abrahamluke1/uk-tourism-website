import React from 'react';
import TopBar from '../components/TopBar';
import Slideshow from '../components/SlideShow';

const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <div style={{ marginTop: '20px' }}>
        <Slideshow/>
      </div>
    </div>
  );
};

export default HomePage;

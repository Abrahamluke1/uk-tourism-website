import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Slideshow from '../components/SlideShow';
import castle from '../assests/castle-g429b98f21_1280.jpg';
import londonEye from '../assests/london-eye-gf53cbfb32_1280.jpg';


const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <div style={{ marginTop: '20px' }}>
        <Slideshow/>
      </div>
     <>
     <h2 style={{ textAlign: 'left', paddingLeft: '10px' ,marginBottom:'0px',marginTop:'50px'}}>Top Destinations</h2>
      <div style={{display: 'flex'}}>
            <Card title="Castle" cover={castle} />
            <Card title="London Eye" cover={londonEye} />
        </div>
     </>
    </div>
  );
};

export default HomePage;

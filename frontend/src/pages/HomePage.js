import React from 'react';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Slideshow from '../components/SlideShow';
import england from '../assests/england.jpg';
import wales from '../assests/wales.jpg';
import scotland from '../assests/scotland.jpg';
import ireland from '../assests/ireland.jpg';
import london from '../assests/london.jpg';
import edinburgh from '../assests/edinburgh.jpg';
import manchester from '../assests/manchester.jpg';
import glasgow from '../assests/glasgow.jpg';
import liverpool from '../assests/liverpool.jpg';
import bristol from '../assests/bristol.jpg';
import york from '../assests/york.jpg';
import oxford from '../assests/oxford.jpg';
import belfast from '../assests/belfast.jpg';
import bath from '../assests/bath.jpg';
import brighton from '../assests/brighton.jpg';
import newcastle from '../assests/newcastle.jpg';
import peak from '../assests/peak.jpg';
import beacons from '../assests/beacons.jfif';
import lakedistrict from '../assests/lakedistrict.jpg';
import snowdonia from '../assests/snowdonia.jfif';
import cornwall from '../assests/cornwall.jpg';
import isle from '../assests/isle.jpg';
import pembroke from '../assests/pembroke.jpg';
import keswick from '../assests/keswick.jfif';
import bibury from '../assests/bibury.jpg';
import whistable from '../assests/whistable.jpg';
import yorkshire from '../assests/yorkshire.jpg';
import Blackpool from '../assests/Blackpool.jpg';
import Lunan from '../assests/Lunan.jpg';
import Formby from '../assests/Formby.jpeg';
import Talisker from '../assests/Talisker.jpeg';
import Rhossili from '../assests/Rhossili.jpg';
import porthcurno from '../assests/Porthcurno.jpg';
import sandsend from '../assests/sandsend.jpg';
import Dungeness from '../assests/Dungeness.jpg';
import Seven from '../assests/Seven.jpg';
import Watergate from '../assests/Watergate.jpg';
import Shanklin from '../assests/Shanklin.jpg';
import Westwittering from '../assests/Westwittering.jpg';
import Bamburgh from '../assests/Bamburgh.jpg';
import west from '../assests/west.jpeg';
import Sandwood from '../assests/Sandwood.jpg';
import '../App.css';


const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <div style={{ marginTop: '20px' }}>
        <Slideshow/>
      </div>
     <>
     <h2 style={{ textAlign: 'left', paddingLeft: '10px' ,marginBottom:'0px',marginTop:'50px'}}>Nations</h2>
      <div style={{display: 'flex'}}>
            <Card title="England" cover={england} />
            <Card title="Scotland" cover={scotland} />
            <Card title="Wales" cover={wales} />
            <Card title="Northern Ireland" cover={ireland} />
        </div>
     </>
     <>
     <h2 style={{ textAlign: 'left', paddingLeft: '10px' ,marginBottom:'0px',marginTop:'50px'}}>Cities</h2>
     <div className="scrollable-div" style={{
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'scroll',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
}}>

            <Card title="London" cover={london} />
            <Card title="Edinburgh" cover={edinburgh} />
            <Card title="Manchester" cover={manchester} />
            <Card title="Glasgow" cover={glasgow} />
            <Card title="Liverpool" cover={liverpool} />
            <Card title="Bristol" cover={bristol} />
            <Card title="York" cover={york} />
            <Card title="Oxford" cover={oxford} />
            <Card title="Belfast" cover={belfast} />
            <Card title="Bath" cover={bath} />
            <Card title="Brighton" cover={brighton} />
            <Card title="Newcastle" cover={newcastle} />
        </div>
     </>
     <>
     <h2 style={{ textAlign: 'left', paddingLeft: '10px' ,marginBottom:'0px',marginTop:'50px'}}>Countryside</h2>
     <div className="scrollable-div" style={{
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'scroll',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
}}>

            <Card title="The Peak District" cover={peak} />
            <Card title="Brecon Beaconsh" cover={beacons} />
            <Card title="The Lake District" cover={lakedistrict} />
            <Card title="Snowdonia" cover={snowdonia} />
            <Card title="Cornwall" cover={cornwall} />
            <Card title="Isle of Skye" cover={isle} />
            <Card title="Barafundle Bay" cover={pembroke} />
            <Card title="Keswick, Cumbria" cover={keswick} />
            <Card title="Bibury, Cotswolds" cover={bibury} />
            <Card title="Whitstable, Kent" cover={whistable} />
            <Card title="Porthcurno" cover={porthcurno} />
            <Card title="Rhossili" cover={Rhossili} />
            <Card title="Talisker Bay" cover={Talisker} />
            <Card title="Formby" cover={Formby} />
            <Card title="Lunan Bay" cover={Lunan} />
            <Card title="Blackpool Sands" cover={Blackpool} />
            
            <Card title="Haworth, Yorkshire" cover={yorkshire} />
        </div>
     </>
     <>
     <h2 style={{ textAlign: 'left', paddingLeft: '10px' ,marginBottom:'0px',marginTop:'50px'}}>Coasts</h2>
     <div className="scrollable-div" style={{
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'scroll',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
}}>

            <Card title="Sandwood Bay" cover={Sandwood} />
            <Card title="West Lulworth" cover={west} />
            <Card title="Bamburgh" cover={Bamburgh} />
            <Card title="West Wittering" cover={Westwittering} />
            <Card title="Shanklin" cover={Shanklin} />
            <Card title="Watergate Bay" cover={Watergate} />
            <Card title="Barafundle Bay" cover={pembroke} />
            <Card title="Seven Sisters" cover={Seven} />
            <Card title="Dungeness" cover={Dungeness} />
            <Card title="Sandsend" cover={sandsend} />
            <Card title="Whitstable, Kent" cover={whistable} />
            
            <Card title="Haworth, Yorkshire" cover={yorkshire} />
        </div>
     </>
    </div>
  );
};

export default HomePage;

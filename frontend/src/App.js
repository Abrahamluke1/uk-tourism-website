import React from 'react';
import SignUp from './pages/SignUp';

import LoginPage from './pages/LoginPage';
import Slideshow from './components/SlideShow';
import HomePage from './pages/HomePage';


const App = () => {
  const containerStyle = {
    margin: '0',
    padding: '0',
  };
  return (
    <div >
  {/* <LoginPage/> */}
  {/* <Slideshow/> */}
  <HomePage/>
      {/* <SignUp /> */}
    </div>
  );
};

export default App;

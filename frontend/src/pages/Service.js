import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import HomeHero from "../components/HomeHero";
import AboutImg from "../assests/bath.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";




function Service() {
  const [isHovered, setHovered] = useState(false);

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${AboutImg})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '20px',
    width: '80%',
    maxWidth: '500px'
  };

  const inputStyle = {
    border: 'none',
    marginLeft: '10px',
    width: '90%',
    outline: 'none' // Added to remove the focus outline
  };

  const iconStyle = {
    color: isHovered ? '#01959a' : '#000',
    cursor: 'pointer'
  };

  return (
    <>
      <Navbar />
      <div style={searchContainerStyle}>
        <div style={searchBarStyle}>
          <i 
            className="fa fa-search" 
            style={iconStyle} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
          />
          <input type="text" placeholder="Search..." style={inputStyle} />
        </div>
      </div>
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
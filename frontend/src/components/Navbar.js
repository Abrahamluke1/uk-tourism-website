import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


class Navbar extends Component {
  state = { clicked: false, favoritesClicked: false, savedLocations: [] };

  componentDidMount() {
    this.getLocations();
    this.intervalID = setInterval(this.getLocations, 2000); // Calls getLocations every 5 seconds
  }

  componentWillUnmount() {
    if (this.intervalID) {
      clearInterval(this.intervalID); // Clears the interval when the component unmounts
    }
  }
   getLocations = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/getLocations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      // Retrieve the location from local storage
      // const localLocations = JSON.parse(localStorage.getItem('savedLocations'));
  
      this.setState({ 
        savedLocations: [...response.data.locations] 
      });
    } catch (error) {
      console.error(error);
    }
  };


  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleFavoritesClick = () => {
    this.setState({ favoritesClicked: !this.state.favoritesClicked });
  };

  deleteLocation = async (location) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`http://localhost:5000/deleteLocation/${encodeURIComponent(location)}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log(response); // Check the response here
    
      let savedLocations = JSON.parse(localStorage.getItem('savedLocations') || '[]'); 
      savedLocations = savedLocations.filter(item => item !== location); 
      localStorage.setItem('savedLocations', JSON.stringify(savedLocations)); 
    
      this.getLocations(); 
    } catch (error) {
      console.error(error);
    }
  };
  

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">UK-Tour</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {item.dropdown ? (
                  <>
                    <button className={item.cName} onClick={this.handleFavoritesClick}>
                      <i className={item.icon}></i>
                      {item.title}
                    </button>
                    {this.state.favoritesClicked && (
  <div className="favorites-dropdown">
    {this.state.savedLocations.length > 0 ? (
      this.state.savedLocations.map((location, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{location}</p>
          <button onClick={() => this.deleteLocation(location)}>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
          </button>
        </div>
      ))
    ) : (
      <p>No Favorites</p>
    )}
  </div>
)}

                  </>
                ) : (
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
          <Link to="/login" className="nav-links-mobile">
            Sign Up
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

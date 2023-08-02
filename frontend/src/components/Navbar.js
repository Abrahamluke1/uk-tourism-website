import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false, favoritesClicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleFavoritesClick = () => {
    this.setState({ favoritesClicked: !this.state.favoritesClicked });
  };

  render() {
    const { savedLocations } = this.props;

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
                    <button className={item.cName} onClick={this[item.onClick]}>
                      <i className={item.icon}></i>
                      {item.title}
                    </button>
                    {this.state.favoritesClicked && (
                      <div className="favorites-dropdown">
                        {savedLocations.length > 0 ? (
                          savedLocations.map((location, index) => (
                            <p key={index}>{location}</p>
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
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}


export default Navbar;

import React from 'react';

const TopBar = () => {
  const topBarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    height: '60px',
    padding: '0 20px',
    color: 'white',
    margin: '0px'
  };

  const titleStyle = {
    marginRight: 'auto',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const searchBoxStyle = {
    flex: '1',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: '20px',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
  };

  const loginLinkStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  };

  const containerStyle = {
    margin: '0',
    padding: '0',
  };

  return (
   
    <div style={topBarStyle}>
      <h2 style={titleStyle}>UK Tourism</h2>
      <input style={searchBoxStyle} type="text" placeholder="Search..." />
      <a href="#" style={loginLinkStyle}>Login</a>
    </div>
    
  );
};

export default TopBar;

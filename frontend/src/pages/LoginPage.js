import React, { useState } from 'react';
import TopBar from '../components/TopBar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form values (e.g., authenticate user)
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '10px', 
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
    paddingLeft: '0px',
  };

  const buttonStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    color: 'white',
    backgroundColor: '#007BFF',
    cursor: 'pointer'
  };

  const signupLinkStyle = {
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <>
      <TopBar />
      <h2 style={titleStyle}>User Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Email:
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            style={inputStyle}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button style={buttonStyle} type="submit">
          Login
        </button>
      </form>
      <p style={signupLinkStyle}>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </>
  );
};

export default LoginPage;

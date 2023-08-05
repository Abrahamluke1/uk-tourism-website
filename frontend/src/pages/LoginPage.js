import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
  
      // Assuming the token is sent in the data of the response
      const token = response.data.token;
      
      // You can store it in the local storage:
      localStorage.setItem('token', token);
  
      // And set it as a default header in axios:
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      console.log(response.data);
      setErrorMessage(null);
      // After successful login, redirect to home
      navigate('/');
  
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        // some default error message if there is no detailed error from the server
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
  
  

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    <div style={containerStyle}>
    <div style={formContainerStyle}>
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
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <p style={signupLinkStyle}>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
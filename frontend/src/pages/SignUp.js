import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form values (e.g., send a POST request to your server)
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

  const descriptionStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#777',
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

  const loginLinkStyle = {
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={titleStyle}>Sign Up</h2>
      <p style={descriptionStyle}>Please fill in this form to create an account.</p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Email:
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            style={inputStyle}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <label style={labelStyle}>
          Confirm Password:
          <input
            style={inputStyle}
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button style={buttonStyle} type="submit">Sign Up</button>
      </form>
      <p style={loginLinkStyle}>
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};

export default SignUp;

import React from 'react';
import SignUp from './pages/SignUp';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import HomePage from './pages/HomePage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
       
      </Routes>
    </Router>
  );
}

export default App;


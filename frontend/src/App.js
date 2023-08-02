import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import WikipediaComponent from "./components/WikipediaComponent";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

function AppRoutes() {
  const [savedLocations, setSavedLocations] = useState([]);
  
  const handleSaveLocation = (location) => {
    setSavedLocations([...savedLocations, location]);
  };
  
  return (
    <div>
      <Navbar savedLocations={savedLocations} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/service" element={<Service />} />
        <Route path="/detail/:title" element={<WikipediaComponent onSaveLocation={handleSaveLocation} />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/login' ? <AppRoutes /> : <LoginPage />}
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;

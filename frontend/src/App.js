import React, { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WikipediaComponent from "./components/WikipediaComponent";
import Navbar from './components/Navbar';

function App() {
  const [savedLocations, setSavedLocations] = useState([]);

  const handleSaveLocation = (location) => {
    setSavedLocations([...savedLocations, location]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar savedLocations={savedLocations} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/service" element={<Service />} />
          <Route path="/detail/:title" element={<WikipediaComponent onSaveLocation={handleSaveLocation} />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

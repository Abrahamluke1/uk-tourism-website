import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WikipediaComponent from "./components/WikipediaComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/service" element={<Service />} />
          <Route path="/detail/:title" element={<WikipediaComponent />} />



          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      
      </div>
    </Router>
  );
}
export default App;
// import React, { useState } from "react";
// import "./styles.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Service from "./pages/Service";


// import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
// import WikipediaComponent from "./components/WikipediaComponent";
// import Navbar from './components/Navbar';
// import LoginPage from "./pages/LoginPage";
// import SignUp from "./pages/SignUp";

// function RoutesWithNavbar() {
//   const [savedLocations, setSavedLocations] = useState([]);
//   const location = useLocation();

//   const handleSaveLocation = (location) => {
//     setSavedLocations([...savedLocations, location]);
//   };

//   return (
//     <div className="App">
//      {(location.pathname !== "/login" && location.pathname !== "/register") && <Navbar savedLocations={this.state.savedLocations} deleteLocation={this.deleteLocation}  />}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/detail/:title" element={<WikipediaComponent onSaveLocation={handleSaveLocation} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<SignUp />} />
//         </Routes>
//       </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <RoutesWithNavbar />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import WikipediaComponent from "./components/WikipediaComponent";
import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

function RoutesWithNavbar() {
  const [savedLocations, setSavedLocations] = useState([]);
  const location = useLocation();

  const handleSaveLocation = (location) => {
    setSavedLocations([...savedLocations, location]);
  };

  const deleteLocation = (locationToDelete) => {
    setSavedLocations(savedLocations.filter(location => location !== locationToDelete));
  };

  return (
    <div className="App">
     {(location.pathname !== "/login" && location.pathname !== "/register") && <Navbar savedLocations={savedLocations} deleteLocation={deleteLocation}  />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/detail/:title" element={<WikipediaComponent onSaveLocation={handleSaveLocation} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
  );
}

function App() {
  return (
    <Router>
      <RoutesWithNavbar />
    </Router>
  );
}

export default App;

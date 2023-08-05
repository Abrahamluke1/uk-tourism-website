import React, { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import WikipediaComponent from "./components/WikipediaComponent";
import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";

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
            {(location.pathname !== "/login" && location.pathname !== "/register") && <Navbar savedLocations={savedLocations} deleteLocation={deleteLocation} />}

            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUp />} />

                {/* Protected Routes */}
                <Route path="/" element={ProtectedRoute(<Home />)} />
                <Route path="/service" element={ProtectedRoute(<Service />)} />
                <Route path="/detail/:title" element={ProtectedRoute(<WikipediaComponent onSaveLocation={handleSaveLocation} />)} />
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

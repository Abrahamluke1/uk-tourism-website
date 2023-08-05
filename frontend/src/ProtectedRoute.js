import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ProtectedRoute(component) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return component;
}

export default ProtectedRoute;

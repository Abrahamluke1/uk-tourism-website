import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import axios from 'axios';
import Trip from '../components/Trip';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        buttonText="Explore"
        url="/service"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;

// function Home() {
//   const [isSignedIn, setIsSignedIn] = useState(false); // Use actual state here
  
//   const history = useHistory();

//   useEffect(() => {
//     const validateUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setIsSignedIn(false);
//           return;
//         }
    
//         const config = {
//           headers: { Authorization: `Bearer ${token}` }
//         };
    
//         // replace '/verify' with your actual endpoint
//         const response = await axios.get('/verify', config); 
    
//         if (response.status === 200) {
//           setIsSignedIn(true);
//         } else {
//           setIsSignedIn(false);
//         }
//       } catch (error) {
//         setIsSignedIn(false);
//       }
//     };

//     validateUser();
    
//     if (!isSignedIn) {
//       history.push('/login');
//     }
//   }, [isSignedIn, history]);

//   return (
//     <>
//       <Navbar />
//       <HomeHero
//         cName="hero"
//         heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//         title="Your Journey Your Story"
//         text="Choose Your Favourite Destination."
//         btnClass="show"
//         buttonText="Explore"
//         url="/service"
//       />
//       <Destination />
//       <Trip />
//       <Footer />
//     </>
//   );
// }

// export default Home;

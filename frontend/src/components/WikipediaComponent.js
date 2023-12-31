import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import 'weather-icons/css/weather-icons.css';
import GoogleMapEmbed from './GoogleMapEmbed';
import axios from 'axios';
import Swal from 'sweetalert2';
import Comment from './Comments';
import CommentsList from './CommentsList';

const WikipediaComponent = () => {


    
    const location = useLocation();
    const { title } = useParams();
    const { postcode, image } = location.state || { postcode: '', image: '' };
    const [content, setContent] = useState(null);
    const [weather, setWeather] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [savedLocations, setSavedLocations] = useState([]);


    const YOUR_OPENCAGE_API_KEY = 'c036d39604944bbe8aaedb366023f24f';
    const YOUR_WEATHER_API_KEY = '604bab36fd1ac468a0b47738a40451de';

    useEffect(() => {
        const localSavedLocations = localStorage.getItem('savedLocations');
        if (localSavedLocations) {
            setSavedLocations(JSON.parse(localSavedLocations));
        }
    }, []);

    const saveLocation = async (title, setLocations) => {
        const token = localStorage.getItem('token');
      
        console.log('Token:', token); // Debug: log the token
        console.log('Location to save:', title); // Debug: log the title
      
        try {
          const response = await axios.post('http://localhost:5000/saveLocation', { location: title }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          console.log('Response:', response); // Debug: log the entire response
      
          if (response.status === 201) {
            setSavedLocations(prevLocations => [...prevLocations, title]);
          }
      
          Swal.fire({
            icon: 'success',
            title: 'Done!',
            text: 'Location saved successfully!',
            confirmButtonColor: '#3085d6',
          })
        } catch (error) {
          console.error('Error:', error); // Debug: log the entire error
      
          if (error.response && error.response.status === 400) {
            Swal.fire({
              icon: 'info',
              title: 'Oops...',
              text: 'You already saved this location.',
              confirmButtonColor: '#3085d6',
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              confirmButtonColor: '#3085d6',
            })
          }
        }
      }
      
    
    
    // delete location

    const deleteLocation = (title) => {
  const localSavedLocations = localStorage.getItem('savedLocations');
  let parsedLocations = JSON.parse(localSavedLocations || '[]');
  const token = localStorage.getItem('token'); 

  if (!parsedLocations.includes(title)) {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'This location has not been saved yet.',
      confirmButtonColor: '#3085d6',
    });
  } else {
    try {
      const response = axios.delete(`http://localhost:5000/deleteLocation/${title}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const index = parsedLocations.indexOf(title);
      if (index > -1) {
        parsedLocations.splice(index, 1);
      }
      localStorage.setItem('savedLocations', JSON.stringify(parsedLocations));
      Swal.fire({
        icon: 'success',
        title: 'Done!',
        text: 'Location deleted successfully!',
        confirmButtonColor: '#3085d6',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonColor: '#3085d6',
      });
    }
  }
};

    
    

    useEffect(() => {
        fetchWikipediaContent();
        fetchLocationCoordinates();
    }, [title]);

    useEffect(() => {
        if (coordinates) {
            fetchWeatherData();
        }
    }, [coordinates]);

    const fetchWikipediaContent = () => {
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`)
            .then(response => response.json())
            .then(data => {
                const pages = data.query.pages;
                const page = pages[Object.keys(pages)[0]];
                setContent(page.extract);
            })
            .catch(error => console.error(error));
    };

    const fetchLocationCoordinates = () => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${title}&key=${YOUR_OPENCAGE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results[0] && data.results[0].geometry) {
                    setCoordinates(data.results[0].geometry);
                }
            })
            .catch(error => console.error(error));
    };

 
    const fetchWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${YOUR_WEATHER_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                data.weather[0].icon = mapWeatherIcon(data.weather[0].main); // map the weather main to an icon
                setWeather(data);
            })
            .catch(error => console.error(error));
    };
  
    const mapWeatherIcon = (weatherMain) => {
        switch (weatherMain.toLowerCase()) {
            case 'clouds': return 'wi-cloudy';
            case 'rain': return 'wi-rain';
            case 'clear': return 'wi-day-sunny';
            case 'snow': return 'wi-snow';
          
            default: return '';
        }
    }

   
    const styles = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2em',
            backgroundColor: '#f2f2f2',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            maxWidth: '80%',
            margin: '2em auto',
            marginTop: '10em',
        },
        mapContainer: {
            width: '600px',
            height: '400px',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
        },
        rightContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '50%',
            paddingLeft: '2em',
        },
        contentContainer: {
            
            flex: '1 1 50%',
            padding: '1em',
            marginRight: '1em',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            marginBottom: '1em',
        },
        weatherContainer: {
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            width:'600px',
            // height:'300px',
            alignItems: 'center',
            marginTop: '1em',
        },
        imgContainer: {
            flex: '1 1 50%',
            padding: '1em',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1em',
        },
        img: {
            maxHeight: '400px',
            width: '100%',
            objectFit: 'cover',
        },
        titleContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1em',
        },
        title: {
            fontSize: '2em',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        content: {
            fontSize: '1.2em',
            textAlign: 'justify',
            lineHeight: '1.5',
        },
        weather: {
            fontSize: '1.2em',
            textAlign: 'justify',
            lineHeight: '1.5',
        },
    };

 
    return (
        <>
          <Navbar savedLocations={savedLocations} deleteLocation={deleteLocation} />


            <div style={styles.mainContainer}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>{title}</h1>
                    <button onClick={() => saveLocation(title)}>Save Location</button>

                </div>
                <div style={styles.container}>
                    <div style={styles.contentContainer}>
                        <p style={styles.content}>{content}</p>
                    </div>
                    <div style={styles.rightContainer}>
                        <div style={styles.imgContainer}>
                            <img src={image} alt={title} loading="lazy" style={styles.img} />
                        </div>
                        {weather && weather.main && weather.weather && weather.weather[0] && (
                            <div style={styles.weatherContainer}>
                                <h2>Current Weather</h2>
                                <p style={styles.weather}>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                                <p style={styles.weather}>Humidity: {weather.main.humidity}%</p>
                                <p style={styles.weather}>{weather.weather[0].description}</p>
                                <i className={`wi ${weather.weather[0].icon}`} style={{fontSize: '3em'}}></i>
                            </div>
                        )}
                        {coordinates && (
                            <div style={styles.mapContainer}>
                                <GoogleMapEmbed lat={coordinates.lat} lng={coordinates.lng} />
                            </div>
                        )}
                    </div>
                </div>
                <a href="https://www.booking.com/country/gb.en.html?aid=1856180&label=msn-6mxZu7KTV56_fpmH*ZUQjg-80470601220719:tikwd-80470700788054:loc-188:neo:mte:lp69232:dec:qsaccommodation%20booking%20in%20uk&utm_campaign=United%20Kingdom&utm_medium=cpc&utm_source=bing&utm_term=6mxZu7KTV56_fpmH*ZUQjg&msclkid=68cbf9ea963e1485de549d38ad5b60a7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <h2 style={{ textAlign: 'center', marginTop: '40px', backgroundColor: '#01959a', color: 'white', padding: '10px', cursor: 'pointer' }}>Looking for Accommodation?</h2>
    </a>
            </div>
           
            <div>
    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Comments</h1>
    <Comment place={title} />
    <CommentsList place={title} />
    
</div>



        </>
    );
    
};

export default WikipediaComponent;

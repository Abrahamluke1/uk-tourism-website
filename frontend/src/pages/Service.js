import React, { useState ,useEffect} from "react";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/bath.jpg";
import { useNavigate } from 'react-router-dom'; 




function Service() {
  const [data, setData] = useState(null);
  const [isHovered, setHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/places')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
            console.error('Error:', error);
        });
}, []);

  const searchContainerStyle = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${AboutImg})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '20px',
    width: '80%',
    maxWidth: '500px'
  };

  const inputStyle = {
    border: 'none',
    marginLeft: '10px',
    width: '90%',
    outline: 'none' // Added to remove the focus outline
  };

  const iconStyle = {
    color: isHovered ? '#01959a' : '#000',
    cursor: 'pointer'
  };

  return (
    <>
      <Navbar />
      <div style={searchContainerStyle}>
        <div style={searchBarStyle}>
          <i 
            className="fa fa-search" 
            style={iconStyle} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
          />
          <input type="text" placeholder="Search..." style={inputStyle} onChange={(e)=>setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        data && // if data is available
        data
          .filter((val) => {
            if(searchTerm === "" || val.title.toLowerCase().includes(searchTerm.toLowerCase())){ // if no search term or if search term matches
              return val;
            }
          })
          .map((val) => {
            return(
              <div 
                key={val.id} 
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  padding: "0px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width:'300px',
                  margin: "20px",
                  textAlign: "center",
                  cursor: 'pointer' // To show a pointer cursor when hovering
                }}
                onClick={() => navigate(`/detail/${val.title}`, { state: { postcode: val.postcode, image: val.image } })} // Redirect to detail page on click



              >
                <img src={val.image} alt="" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0"}}loading="lazy"/>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>  
            )
          })
      }
      </div>
    </>
  );
}

export default Service;

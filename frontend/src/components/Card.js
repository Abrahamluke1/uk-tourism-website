import React from 'react';

const Card = ({title, cover}) => {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        margin: '10px',
        boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)',
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
    };

    const titleStyle = {
        margin: '10px',
        textAlign: 'center',
        color: '#333',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <div style={cardStyle}>
            <img style={imageStyle} src={cover} alt={title} />
            <p style={titleStyle}>{title}</p>
        </div>
    );
};

export default Card;

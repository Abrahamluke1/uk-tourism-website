import React, { useState, useEffect } from 'react';

const WikipediaComponent = () => {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=London Eye")
            .then(response => response.json())
            .then(data => {
                const pages = data.query.pages;
                const page = pages[Object.keys(pages)[0]];
                setTitle(page.title);
                setContent(page.extract);

                // Make a new fetch request for the image
                return fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=images&format=json&titles=${page.title}`);
            })
            .then(response => response.json())
            .then(data => {
                const pages = data.query.pages;
                const page = pages[Object.keys(pages)[0]];
                const imageName = page.images[0].title;

                // Fetch the actual URL of the image
                return fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=imageinfo&iiprop=url&format=json&titles=${encodeURIComponent(imageName)}`);
            })
            .then(response => response.json())
            .then(data => {
                const pages = data.query.pages;
                const page = pages[Object.keys(pages)[0]];
                const imageUrl = page.imageinfo[0].url;
                setImageUrl(imageUrl);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {title && <h1>{title}</h1>}
            {imageUrl && <img src={imageUrl} alt={title}   loading="lazy" />}
            {content && <p>{content}</p>}
        </div>
    );
};

export default WikipediaComponent;

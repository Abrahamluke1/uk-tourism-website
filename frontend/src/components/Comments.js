import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from './CommentForm.module.css';
import jwt_decode from 'jwt-decode';

function CommentForm({ place }) {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("Initializing CommentForm component...");
        
        const tokenFromLocalStorage = localStorage.getItem('token');
        console.log(`Fetched token from local storage: ${tokenFromLocalStorage}`);
        
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage);
        }
    }, []);


    

    const handleRatingChange = (nextValue) => {
        console.log(`Rating changed to: ${nextValue}`);
        setRating(nextValue);
    };

    const handleCommentChange = (e) => {
        console.log(`Comment text changed to: ${e.target.value}`);
        setComment(e.target.value);
    };

    const postComment = async (commentData) => {
        console.log("Attempting to post comment data:", commentData);
        
        try {
            const response = await fetch('http://localhost:5000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(commentData),
            });

            console.log(`Received response with status code: ${response.status}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Received data from server:", responseData);
            return responseData;

        } catch (error) {
            console.error("Error while posting comment:", error);
            throw error;
        }
    };




    const handleSubmit = async (e) => {
        console.log("Submit button clicked")
        e.preventDefault();

        if (!token) {
            console.error("Token is not available! Cannot submit comment.");
            return;
        }

        const decodedToken = jwt_decode(token);
        const user = decodedToken.user;
        console.log(`Decoded user from token: ${user}`);

        const commentData = {
            rating,
            comment,
            user,
            place,
        };

        try {
            await postComment(commentData);
            console.log("Comment posted successfully!");
            setComment('');
            setRating(0);
        } catch (error) {
            console.error("Error while posting comment:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.starRating}>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick={handleRatingChange}
                />
            </div>
            <div className={styles.row}>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className={styles.textarea}
                />
            </div>
                <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}

export default CommentForm;

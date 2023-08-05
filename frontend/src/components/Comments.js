import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from './CommentForm.module.css';
import jwt_decode from 'jwt-decode';


function CommentForm() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [token, setToken] = useState('');

    const handleRatingChange = (nextValue) => {
        setRating(nextValue);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // fetch the JWT from local storage when the component mounts
    useEffect(() => {
        const tokenFromLocalStorage = localStorage.getItem('token');
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage);
        }
    }, []);

    const postComment = async (commentData) => {
        const response = await fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(commentData),
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        return response.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const decodedToken = jwt_decode(token);
        const user = decodedToken.user;
    
        const commentData = {
            rating,
            comment,
            user
        };
    
        try {
            const response = await postComment(commentData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    
        setComment('');
        setRating(0); 
    };
    
    

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.starRating}>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick={handleRatingChange.bind(this)}
                />
            </div>
            <div className={styles.row}>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </div>
        </form>
    );
}

export default CommentForm;

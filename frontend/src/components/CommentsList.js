import React, { useEffect, useState } from 'react';
import './CommentsList.css';
import StarRatingComponent from 'react-star-rating-component';

function CommentsList({ place }) {
    const [comments, setComments] = useState([]);
    const fetchInterval = 2000; // 2 seconds, adjust as needed

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://localhost:5000/comments?place=${place}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setComments(data);
            console.log(data)
        };

        // Fetch comments immediately upon mounting
        fetchComments();
        
        // Then set up an interval to fetch comments
        const intervalId = setInterval(fetchComments, fetchInterval);
        
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [place]);

    return (
        <div className="comments-container">
        {comments.map((comment) => {
            const username = comment.user.email.split('@')[0];
            return (
                <div key={comment._id} className="comment-card">
                    <h3>{username}</h3>
                    <p>{comment.comment}</p>
                    <div className="star-rating">
                        <StarRatingComponent 
                            name={`rate${comment._id}`} 
                            starCount={5}
                            value={comment.rating}
                            editing={false} // Makes it read-only
                        />
                    </div>
                </div>
            );
        })}
    </div>
    
    );
    
}

export default CommentsList;

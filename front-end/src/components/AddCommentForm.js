import React, { useState } from 'react';

const AddCommentForm = () => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    
    const addCommnet = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'POST',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>

            <label>
                Name:

                <input 
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            
            <label>
                Comment:
                
                <textarea 
                    rows="4" 
                    cols="50"
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                />
            </label>

            <button>Add Comment</button>
        </div>
    )
};

export default AddCommentForm;
import React, { useState } from 'react'
import './MessageSender.css'
import Avatar from "@mui/material/Avatar"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db, { serverTimestamp } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function MessageSender() {
    const [{ user }] = useStateValue(); //,dispatch
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                message: input,
                image: imageUrl,
                timestamp: serverTimestamp(),
                username: user.displayName,
                profilePic: user.photoURL
            })
            console.log("Document written with ID: ", docRef.id);
            setInput('');
            setImageUrl('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
    return (
        <div className='messageSender'>
            <div className="messageSender-top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='messageSender-input' placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Image URL (optional)' />
                    <button onClick={handleSubmit} type='submit'>Hidden submit</button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender-option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender-option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

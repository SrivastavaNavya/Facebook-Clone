import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });

    // Cleanup function to unsubscribe from snapshot listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      < StoryReel />
      < MessageSender />

      {posts.map(post => (
        < Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post profilePic="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyyBoYhVwx-m23M0dlzxJYoAAmIAVZSMnlK9ND_sYK_iq8-Yup" message="I think you have to let go of this idea that you can be precious about everything, and let it be the abstract mess that it is." username="Ryan Reynolds" timestamp="This is a timestamp" image="https://media.gq.com/photos/58249cdda9546c3d5193215a/16:9/w_1600%2Cc_limit/1216-GQ-FERR02-01-Ryan-Reynolds-Deadpool-04.jpg" />
      <Post profilePic="https://variety.com/wp-content/uploads/2019/11/chris-evans-feat-image.jpg?w=1000" message="The past is the past, but if you're overanalyzing or trying to repeat it, you're gonna get stuck." username="Chris Evans" timestamp="This is a timestamp" image="https://www.goalcast.com/wp-content/uploads/2022/11/evans-people.gif" />
      <Post profilePic="https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj-1180x600.jpg" message="I think that we all do heroic things, but hero is not a noun, it's a verb." username="Robert Downey Jr" timestamp="This is a timestamp" image="https://insidethemagic.net/wp-content/uploads/2021/09/robert-downey-jr-as-tony-stark-800x400.jpeg" />  */}
    </div>
  )
}

export default Feed 

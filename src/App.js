import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
//import  db  from "./firebase";
import { db } from './firebase';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png"
          alt=""
        />
      </div>
      <h1>Hai yaswanth</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageurl={post.imageurl}
          profile_dp={post.profile_dp}
        />
      ))}
      
    </div>
  );
}

export default App;

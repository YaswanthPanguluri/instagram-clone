import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
//import  db  from "./firebase";
import { db } from './firebase';


function App() {
  const [posts, setPosts] = useState([]);

//Explanation
//The useEffect Hook is a built-in hook in React that allows you to perform side effects in functional components. It takes two arguments: a callback function and an optional dependency array.
//In this example, the useEffect Hook is used to set up a listener on a Firestore collection called "posts". Whenever there is a change in the collection, the callback function (snapshot) => { setPosts(snapshot.docs.map((doc) => doc.data())); } is executed.
//The callback function receives a snapshot object that represents the current state of the collection. The snapshot.docs property contains an array of document snapshots, and the map function is used to extract the data from each document using doc.data(). The resulting array of data is then used to update the state variable posts using the setPosts function.
//The empty dependency array [] passed as the second argument to useEffect ensures that the effect is only run once, when the component is mounted. If any dependencies were specified in the array, the effect would be re-run whenever any of those dependencies change.
 
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
      <Post
        profile_dp="https://media.licdn.com/dms/image/D5603AQFKqfOfmWbQ5g/profile-displayphoto-shrink_800_800/0/1681255902337?e=2147483647&v=beta&t=FptGMLh53LZiTzj6hA8zvELeIhgrbgsQHM_BvuStPAk"
        imageurl="https://d2j6dbq0eux0bg.cloudfront.net/images/36125377/2882798229.jpg"
        username="Shiva_mandadi"
        caption="cheers!!"
      />

      <Post
        profile_dp="https://media.licdn.com/dms/image/D5603AQFXiisG4BMUQQ/profile-displayphoto-shrink_800_800/0/1678853378281?e=2147483647&v=beta&t=M4zQ7ExxLwsVROTOwn701F9CzG_RVy7CNcjsB1pJCzU"
        imageurl="https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        username="Kalyan_Chakravarthi"
        caption="good morning"
      />
    </div>
  );
}

export default App;

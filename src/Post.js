import React from "react";
import "./post.css";
//npm install @mui/material @mui/styled-engine-sc styled-components
import Avatar from "@mui/material/Avatar";

function Post({ profile_dp,imageurl, username, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avathar" alt="{Yaswanth}" src={profile_dp} />
        <h3>{username}</h3>
        {/* header ->avathar + username */}
      </div>

      <img
        className="post__image"
        src={imageurl}
        alt="{react-image}"
      />
      {/* image */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;

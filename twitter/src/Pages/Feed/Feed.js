// import React, {useState} from "react";
// import "./Feed.css";
// import Tweetbox from "./Tweetbox/Tweetbox";
// import Posts from "./Posts/Posts";
// // import { profile } from "console";

// const Feed = () => {
//   const [post, setpost] = useState([]);
//   const data = [
//     {
//       _id: "1",
//       name: "Jane Doe",
//       username: "@jane_doe",
//       profilePhoto: "https://example.com/profiles/jane.jpg",
//       posts: "Exploring the new features in JavaScript #coding #javascript",
//       photo: "https://example.com/posts/javascript.png",
//     },
//     {
//       _id: "2",
//       name: "John Smith",
//       username: "@john_smith",
//       profilePhoto: "https://example.com/profiles/john.jpg",
//       posts: "Just finished a great workout #fitness #workout",
//       photo: "https://example.com/posts/workout.png",
//     },
//     {
//       _id: "3",
//       name: "Alice Johnson",
//       username: "@alice_johnson",
//       profilePhoto: "https://example.com/profiles/alice.jpg",
//       posts: "Loving the new featured in css #webdevelopment #deisgn",
//       photo: "https://example.com/posts/css.png",
//     },
//   ];
//   setpost(data);
//   return (
//     <div className="feed">
//       <div className="feed__header">
//         <h2>Home</h2>
//       </div>
//       <Tweetbox />
//       {post.map((p) => (
//         <Posts key={p._id} p={p} />
//       ))}
//     </div>
//   );
// };

// export default Feed;

import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox/Tweetbox";
import Posts from "./Posts/Posts";

const Feed = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const data = [
      {
        _id: "1",
        name: "Jane Doe",
        username: "@jane_doe",
        profilePhoto: "https://example.com/profiles/jane.jpg",
        posts: "Exploring the new features in JavaScript #coding #javascript",
        photo: "https://example.com/posts/javascript.png",
      },
      {
        _id: "2",
        name: "John Smith",
        username: "@john_smith",
        profilePhoto: "https://example.com/profiles/john.jpg",
        posts: "Just finished a great workout #fitness #workout",
        photo: "https://example.com/posts/workout.png",
      },
      {
        _id: "3",
        name: "Alice Johnson",
        username: "@alice_johnson",
        profilePhoto: "https://example.com/profiles/alice.jpg",
        posts: "Loving the new featured in css #webdevelopment #deisgn",
        photo: "https://example.com/posts/css.png",
      },
    ];
    setpost(data); // State is updated only once when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {post.map((p) => (
        <Posts key={p._id} p={p} />
      ))}
    </div>
  );
};

export default Feed;


// import React, {useState} from "react";
// import "../Mainprofile/Mainprofile.css";
// import Posts from "../Posts/posts";
// import { useNaivgate } from "react-router-dom";
// import ArrowBackIcons from "@mui/icons-material/ArrowBack";
// import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
// import LockResetIcon from "@mui/icons-material/LockReset";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import AddLinkIcon from "@mui/icons-material/AddLink";
// import Editprofile from "../Editprofile/Editprofie";

// const Mainprofile = () => {
//   const navigate = useNaivgate();
//   const [isloading, setisloading] = useState(false);
//   const [loggedinuser] = {};
//   const username = user?.email.split("@")[0];
//   const [posts, setposts] = useState([
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
//   ]);

//   return (
//     <div>
//       <ArrowBackIcons className="arrow-icon" onClick={() => navigate("/")} />
//       <h4 className="heading-4">{username}</h4>
//       <div class name="mainprofile">
//         <div className="profile-bio">
//           {
//             <div>
//               <div className="coverImageContainer">
//                 <img
//                   src={
//                     loggedinuser[0].profileImage
//                       ? loggedinuser[0].profileImage
//                       : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//                   }
//                   alt=""
//                   className="coverImage"
//                 />
//                 <div className="hoverCoverImage">
//                   <div className="imaeIcon_tweetButton">
//                     <label htmlFor="image" className="imageIcon">
//                       {isloading ? (
//                         <LockResetIcon className="photoIcon photoIconDisabled" />
//                       ) : (
//                         <CenterFocusWeakIcon className="photoIcon" />
//                       )}
//                     </label>
//                     <input type="file" id="image" className="imageInput" />
//                   </div>
//                 </div>
//               </div>
//               <div className="avatar-img">
//                 <div className="avatarContainer">
//                   <img
//                     src={
//                       loggedinuser[0].profileImage
//                         ? loggedinuser[0].profileImage
//                         : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//                     }
//                     alt=""
//                     className="avatar"
//                   />
//                   <div className="hoverAvaterIamge">
//                     <div className="imageIcon_tweetButton">
//                       <label htmlFor="profileImage" className="imageIcon">
//                         {isloading ? (
//                           <LockResetIcon className="photoIcon photoIconDisabled" />
//                         ) : (
//                           <CenterFocusWeakIcon className="photoIcon" />
//                         )}
//                       </label>
//                       <input
//                         type="file"
//                         id="profileImage"
//                         className="imageInput"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="userInfo">
//                   <div>
//                     <h3 className="heading-3">
//                       {loggedinuser[0]?.name
//                         ? loggedinuser[0].name
//                         : user && user.displayname}
//                     </h3>
//                     <p className="username">@{username}</p>
//                   </div>
//                   <Editprofile user={user} loggedinuser={loggedinuser} />
//                 </div>
//                 <div className="infoContainer">
//                   {loggedinuser[0]?.bio ? <p>{loggedinuser[0].bio}</p> : ""}
//                   <div>
//                     {loggedinuser[0]?.location ? (
//                       <p className="suvInfo">
//                         <MyLocationIcon />
//                       </p>
//                     ) : (
//                       ""
//                     )}
//                     {loggedinuser[0]?.website ? (
//                       <p className="suvInfo link"><AddLinkIcon/>{loggedinuser[0].location}</p>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 <h4 className="tweetsText">Tweets</h4>
//                 <hr/>
//               </div>
//               {
//                 data.map((p)=>(
//                     <Posts p={p}/>
//                 ))
//               }
//             </div>
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mainprofile;

import React, { useState } from "react";
import "../Mainprofile/Mainprofile.css";
import Posts from "../Posts/posts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import LockResetIcon from "@mui/icons-material/LockReset";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Editprofile from "../Editprofile/Editprofile";

const Mainprofile = () => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [loggedinuser] = useState([]);
  const user = { email: "example@example.com", displayname: "Example User" }; // Example user data
  const username = user?.email.split("@")[0];
  const [posts] = useState([
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
      posts: "Loving the new features in CSS #webdevelopment #design",
      photo: "https://example.com/posts/css.png",
    },
  ]);

  return (
    <div>
      <ArrowBackIcon className="arrow-icon" onClick={() => navigate("/")} />
      <h4 className="heading-4">{username}</h4>
      <div className="mainprofile">
        <div className="profile-bio">
          <div>
            <div className="coverImageContainer">
              <img
                src={
                  loggedinuser[0]?.profileImage ||
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt="Cover"
                className="coverImage"
              />
              <div className="hoverCoverImage">
                <div className="imageIcon_tweetButton">
                  <label htmlFor="image" className="imageIcon">
                    {isloading ? (
                      <LockResetIcon className="photoIcon photoIconDisabled" />
                    ) : (
                      <CenterFocusWeakIcon className="photoIcon" />
                    )}
                  </label>
                  <input type="file" id="image" className="imageInput" />
                </div>
              </div>
            </div>
            <div className="avatar-img">
              <div className="avatarContainer">
                <img
                  src={
                    loggedinuser[0]?.profileImage ||
                    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt="Avatar"
                  className="avatar"
                />
                <div className="hoverAvaterIamge">
                  <div className="imageIcon_tweetButton">
                    <label htmlFor="profileImage" className="imageIcon">
                      {isloading ? (
                        <LockResetIcon className="photoIcon photoIconDisabled" />
                      ) : (
                        <CenterFocusWeakIcon className="photoIcon" />
                      )}
                    </label>
                    <input
                      type="file"
                      id="profileImage"
                      className="imageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="userInfo">
                <div>
                  <h3 className="heading-3">
                    {loggedinuser[0]?.name || user?.displayname}
                  </h3>
                  <p className="username">@{username}</p>
                </div>
                <Editprofile user={user} loggedinuser={loggedinuser} />
              </div>
              <div className="infoContainer">
                {loggedinuser[0]?.bio && <p>{loggedinuser[0].bio}</p>}
                <div>
                  {loggedinuser[0]?.location && (
                    <p className="suvInfo">
                      <MyLocationIcon />
                      {loggedinuser[0].location}
                    </p>
                  )}
                  {loggedinuser[0]?.website && (
                    <p className="suvInfo link">
                      <AddLinkIcon />
                      {loggedinuser[0].website}
                    </p>
                  )}
                </div>
              </div>
              <h4 className="tweetsText">Tweets</h4>
              <hr />
              {posts.map((p) => (
                <Posts key={p._id} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainprofile;


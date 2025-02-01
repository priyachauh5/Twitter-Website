// import React, { useState } from "react";
// import "./Tweetbox.css";
// import { Avatar, Button } from "@mui/material";
// import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
// import { useUserauth } from "../../../context/userauthcontext";
// import useLoggedinuser from "../../../hooks/useLoggedinuser";
// import axios from "axios";

// const Tweetbox = () => {
//   const [posts, setPosts] = useState("");
//   const [imageurl, setImage] = useState("");
//   const [isloading, setisloading] = useState(false);
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const { user } = useUserauth();
//   const [loggedinuser] = useLoggedinuser();
//   const email = user?.email;
//   const userprofileepic = loggedinuser[0]?.profileImage
//     ? loggedinuser[0]?.profileImage
//     : "https://example.com/profiles/jane.jpg";
//   const handleuploadimage=(e)=>{
//     setisloading(true);
//     const image=e.target.files[0];
//     const formData=new FormData();
//     formData.set("image", image);
//     axios.post('https://api.imgbb.com/1/upload?key=b0ea2f6cc0f276633b2a8a86d2c43335',formData)
//     .then(res=>{
//       setImageurl(res.data.data.display_url);
//       console.log(res.data.data.display_url);
//       setisloading(false);
//     })
//     .catch((e)=>{
//       console.log(e);
//       setisloading(false);
//     })
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setisloading(true);
//       // Simulate image upload
//       setTimeout(() => {
//         setImage(URL.createObjectURL(file));
//         setisloading(false);
//       }, 1000); // Mock a 1-second upload delay
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (posts.trim() || imageurl) {
//       // Logic to handle the tweet submission
//       console.log("New Post:", { posts, imageurl });
//       setPosts("");
//       setImage(null);
//     } else {
//       alert("Please write something or upload an image!");
//     }
//   };

//   return (
//     <div className="tweetbox">
//       <form onSubmit={handleSubmit}>
//         <div className="tweetbox__input">
//           <Avatar src="https://example.com/profiles/jane.jpg" />
//           <input
//             type="text"
//             placeholder="What's happening?"
//             value={posts}
//             onChange={(e) => setPosts(e.target.value)}
//           />
//         </div>
//         <div className="imageIcon__tweetButton">
//           <label htmlFor="image" className="imageIcon">
//             {isloading ? (
//               <p>Uploading Image...</p>
//             ) : (
//               <>
//                 {imageurl ? (
//                   <p>Image Uploaded</p>
//                 ) : (
//                   <AddPhotoAlternateOutlinedIcon />
//                 )}
//               </>
//             )}
//           </label>
//           <input
//             type="file"
//             id="image"
//             className="imageInput"
//             onChange={handleFileChange}
//           />
//           <Button className="tweetBox__tweetButton" type="submit">
//             Tweet
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Tweetbox;


import React, { useState, useEffect } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { useUserauth } from "../../../context/userauthcontext";
import useLoggedinuser from "../../../hooks/useLoggedinuser";
import axios from "axios";  // Ensure axios is installed

const Tweetbox = () => {
  const [posts, setPosts] = useState("");
  const [imageurl, setImage] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [name, setName] = useState(""); // State for name
  const [username, setUsername] = useState(""); // State for username
  const { user } = useUserauth();
  const loggedinuser = useLoggedinuser()[0]; // Ensure you handle this correctly if it's undefined
  const userprofileImage = loggedinuser?.profileImage || "https://example.com/profiles/jane.jpg";  // Default profile image if no profile image exists

  const email = user?.email; // Define email

  const handleUploadImage = (e) => {
    setIsLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    // Use your correct API key for imgBB
    axios.post("https://api.imgbb.com/1/upload?key=b0ea2f6cc0f276633b2a8a86d2c43335", formData)
      .then((response) => {
        setImage(response.data.data.url); // Set the uploaded image URL
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setIsLoading(false);
      });
  };

  const handleTweet = (e) => {
    e.preventDefault();
    if (user?.providerData[0]?.providerId === "password") {
      // Fetch user data if using password provider
      fetch(`http://localhost:5000/loggedinuser?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data[0]?.name);
          setUsername(data[0]?.username);
        });
    } else {
      // Use displayName if available
      setName(user?.displayName);
      setUsername(email?.split("@")[0]);
    }

    // Check if name is available before posting
    if (name && username) {
      const userpost = {
        profilephoto: userprofileImage,
        posts: posts,
        photo: imageurl,
        username: username,
        name: name,
        email: email,
      };

      setPosts("");
      setImage("");
      
      // Post the tweet data to backend
      fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userpost)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (posts.trim() || imageurl) {
      // Logic to handle tweet submission (e.g., send data to the backend)
      console.log("New Post:", { posts, imageurl });
      setPosts("");
      setImage(null);
    } else {
      alert("Please write something or upload an image!");
    }
  };

  return (
    <div className="tweetbox">
      <form onSubmit={handleTweet}>
        <div className="tweetbox__input">
          <Avatar src={userprofileImage} />
          <input
            type="text"
            placeholder="What's happening?"
            value={posts}
            onChange={(e) => setPosts(e.target.value)}
          />
        </div>
        <div className="imageIcon__tweetButton">
          <label htmlFor="image" className="imageIcon">
            {isloading ? (
              <p>Uploading Image...</p>
            ) : (
              <>
                {imageurl ? (
                  <p>Image Uploaded</p>
                ) : (
                  <AddPhotoAlternateOutlinedIcon />
                )}
              </>
            )}
          </label>
          <input
            type="file"
            id="image"
            className="imageInput"
            onChange={handleUploadImage} // Updated function for image upload
          />
          <Button className="tweetBox__tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;


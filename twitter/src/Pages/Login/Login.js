import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../image/twitter.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { useUserauth } from "../../context/userauthcontext"; // Correct import
import "./login.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  
  // Ensure we destructure correctly from the context
  const { googlesignin, login } = useUserauth(); // Correct hook usage

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(email, password); // Call login function
      navigate("/"); // Navigate to the homepage or dashboard
    } catch (error) {
      console.log(error.message);
      seterror(error.message); // Set error for display
    }
  };

  const handlegooglesignin = async (e) => {
    e.preventDefault();
    try {
      await googlesignin(); // Call google sign-in function
      navigate("/"); // Navigate after successful Google sign-in
    } catch (error) {
      console.log(error.message);
      seterror(error.message); // Display Google sign-in error
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img
          className="image"
          src={twitterimg}
          alt="twitterimage"
          style={{ height: "592px", width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div className="form-container">
        <div className="form-box">
          <TwitterIcon className="twitter-icon" style={{ color: "skyblue", fontSize: "40px" }} />
          <h2 className="heading" style={{ fontSize: "35px" }}>
            Happening now
          </h2>
          {error && <p className="errorMessage">{error}</p>}
          <form onSubmit={handlesubmit}>
            <input
              className="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="btn">
                Log In
              </button>
            </div>
          </form>
          <hr />
          <div>
            <GoogleButton className="g-btn" type="light" onClick={handlegooglesignin} />
          </div>
        </div>
        <div>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "var(--twitter-color)",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

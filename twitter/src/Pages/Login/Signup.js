import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../image/twitter.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { useUserauth } from "../../context/userauthcontext"; // Correct import
import { Button } from "@mui/material";
import "./login.css";

const Signup = () => {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { signin, googlesignin } = useUserauth(); // Correct usage of the hook
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signin(email, password);
      const user = {
        username: username,
        name: name,
        email: email,
        password: password,
      };
      fetch("https://localhost:5000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            navigate("/");
          }
        });
    } catch (error) {
      seterror(error.message);
      window.alert(error.message);
    }
  };

  const handlegooglesignin = async (e) => {
    e.preventDefault();
    try {
      await googlesignin(); // Correct function name
      navigate("/"); // Navigate after successful Google sign-in
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          className="image"
          src={twitterimg}
          alt="twitterimage"
          style={{ height: "592px", width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div className="form-container">
        <div className="form-container" style={{ width: "450px" }}>
          <TwitterIcon
            className="twitter-icon"
            style={{ color: "skyblue", fontSize: "40px" }}
          />
          <h1 className="heading" style={{ fontSize: "35px" }}>
            Happening now
          </h1>
          <h3 className="heading" style={{ marginLeft: "20%" }}>
            Join Twiller today
          </h3>
          {error && <p className="errorMessage">{error}</p>}
          <form onSubmit={handlesubmit}>
            <input
              className="display-name"
              type="text"
              placeholder="@username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Sign up
            </Button>
          </form>
          <GoogleButton className="g-btn" type="light" onClick={handlegooglesignin} />
          <div>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

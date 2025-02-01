// import React from 'react'
// import Widgets from "./Widgets/Widgets";
// import Sidebar from "./Sidebar/sidebar";
// import {Outlet} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'

// const Home=()=> {
//     const navigate=useNavigate();
//     const user={
//         displayname:"bithead",
//         email:"bithead@gmail.com"
//     }
//     const handlelogout=async()=>{
//         try{
//             navigate("/login");
//         }catch(error){
//             console.log(error.message);
//         }
//     };
//     return (
//         <div className="app">
//             <Sidebar handlelogout={handlelogout} user={user}/>
//             <Outlet/>
//             <Widgets />
//         </div>
//      );
//  }

//  export default Home;

import React from "react";
import Widgets from "./Widgets/Widgets";
import Sidebar from "./Sidebar/Sidebar";

import { Outlet, useNavigate } from "react-router-dom";
import { useUserauth } from "../context/userauthcontext";

const Home = () => {
  const {logOut, user}=useUserauth;
  const navigate = useNavigate();

  // const user = {
  //   displayname: "bithead",
  //   email: "bithead@gmail.com",
  // };

  const handleLogout = async() => {
    try {
      await logOut()
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div className="app">
      <Sidebar handlelogout={handleLogout} user={user} />
      <div className="main-content">
        <div className="left-section">
          <Outlet />
        </div>
        <div className="right-section">
          <Widgets />
        </div>
      </div>
    </div>

    // <div className="app">
    //   <Sidebar handlelogout={handleLogout} user={user} />
    //   <Outlet />
    //   <Widgets />
    // </div>
  );
};

export default Home;

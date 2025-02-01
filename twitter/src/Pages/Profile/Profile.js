import React from 'react';
import "../pages.css";
import Mainprofile from './Mainprofile/Mainprofile';    


const Profile=()=> {
    const user = {
        displayname: "bithead",
        email: "bithead@gmail.com",
    };
    return ( 
        <div className="profilepage">
            <Mainprofile user={user}/>
        </div>
     );
}

export default Profile;
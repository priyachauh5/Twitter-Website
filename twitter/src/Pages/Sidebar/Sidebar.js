// import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import MailOutLineIcon from "@mui/icons-material/AbcMailOutLine";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import MoreIcon from "@mui/icons-material/More";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Divider from "@mui/material/Divider";
// import DoneIcon from "@mui/icons-material/Done";
// import Button from "@mui/material/Button";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import { Avatar } from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import "./sidebar.css";
// import "./Customlink";
// import "./Sidebaroption";
// import { useNavigate } from "react-router-dom";
// import Customlink from "./Customlink";
// import Sidebaroption from "./Sidebaroption";

// const Sidebar = ({ handlelogout, user }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const openmenu = Boolean(anchorEl);
//   const loggedinuser = {};
//   const navigate = useNavigate();
//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const result = user?.email?.split("@")[0];
//   return (
//     <div>
//       <TwitterIcon className="sidebar_twittericon" />
//       <Customlink to="/home/feed">
//         <Sidebaroption active Icon={HomeIcon} text="Home/" />
//       </Customlink>
//       <Customlink to="/home/explore">
//         <Sidebaroption Icon={SearchIcon} text="Explore/" />
//       </Customlink>
//       <Customlink to="/home/notification">
//         <Sidebaroption
//           active
//           Icon={NotificationsNoneIconIcon}
//           text="Notifications/"
//         />
//       </Customlink>
//       <Customlink to="/home/messages">
//         <Sidebaroption active Icon={BookmarkBorderIconIcon} text="Messages/" />
//       </Customlink>
//       <Customlink to="/home/lists">
//         <Sidebaroption active Icon={ListAltIconIcon} text="Lists/" />
//       </Customlink>
//       <Customlink to="/home/profile">
//         <Sidebaroption active Icon={PermIdentityIconIcon} text="Profile/" />
//       </Customlink>
//       <Customlink to="/home/more">
//         <Sidebaroption active Icon={MoreIcon} text="More/" />
//       </Customlink>
//       <Button varient="outlined" className="sidebar__tweet" fullWidth>
//         Tweet
//       </Button>
//       <div>
//         <Avatar
//           src={
//             loggedinuser[0]?.profileImage
//               ? loggedinuser[0].profileImage
//               : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//           }
//         />
//         <div className="user__info">
//           <h4>
//             {loggedinuser[0]?.name
//               ? loggedinuser[0].name
//               : user && user.displayname}
//           </h4>
//           <h5>@{result}</h5>
//         </div>
//         <IconButton
//           size="small"
//           sx={{ ml: 2 }}
//           aria-control={openmenu ? "basic-menu" : undefined}
//           aria-haspopup="true"
//           aria-valuetext={openmenu ? "true" : undefined}
//           onclick={handleClick}
//         />
//         <MoreHorizIcon />
//         <IconButton />
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={openmenu}
//           onclick={handleClose}
//           onClose={handleClose}
//         >
//           <MenuItem
//             className="Profile__info1"
//             onClick={() => navigate("/home/profile")}
//           >
//             <Avatar
//               src={
//                 loggedinuser[0]?.profileImage
//                   ? loggedinuser[0].profileImage
//                   : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//               }
//             />
//             <div className="user__info subUse__info">
//               <div>
//                 <h4>
//                   {loggedinuser[0]?.name ? loggedinuser[0].name : user &&
//                   user.displayname}
//                 </h4>
//                 <h5>@{result}</h5>
//               </div>
//               <ListItemIcon className="done__icon" color="blue">
//                 <DoneIcon/>
//                 </ListItemIcon>
//             </div>
//           </MenuItem>
//           <Divider/>
//           <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
//           <MenuItem onClick={handlelogout}>Logout @{result}</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import {
//   Twitter as TwitterIcon,
//   Home as HomeIcon,
//   Search as SearchIcon,
//   NotificationsNone as NotificationsNoneIcon,
//   BookmarkBorder as BookmarkBorderIcon,
//   ListAlt as ListAltIcon,
//   PermIdentity as PermIdentityIcon,
//   MoreHoriz as MoreHorizIcon,
//   Done as DoneIcon,
// } from "@mui/icons-material";
// import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Customlink from "./Customlink";
// import Sidebaroption from "./Sidebaroption";
// import "./sidebar.css";
// import useLoggedinuser from "../../hooks/useLoggedinuser";

// const Sidebar = ({ handlelogout, user }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const openmenu = Boolean(anchorEl);
//   const [loggedinuser] = useLoggedinuser();
//   const navigate = useNavigate();

//   const handleClick = (e) => setAnchorEl(e.currentTarget);
//   const handleClose = () => setAnchorEl(null);

//   const username = user?.email?.split("@")[0] || "Unknown";

//   return (
//     <div>
//       <TwitterIcon className="sidebar_twittericon" />
//       <Customlink to="/home/feed">
//         <Sidebaroption active Icon={HomeIcon} text="Home/" />
//       </Customlink>
//       <Customlink to="/home/explore">
//         <Sidebaroption Icon={SearchIcon} text="Explore/" />
//       </Customlink>
//       <Customlink to="/home/notification">
//         <Sidebaroption Icon={NotificationsNoneIcon} text="Notifications/" />
//       </Customlink>
//       <Customlink to="/home/messages">
//         <Sidebaroption Icon={BookmarkBorderIcon} text="Messages/" />
//       </Customlink>
//       <Customlink to="/home/bookmarks">
//         <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmarks/" />
//       </Customlink>
//       <Customlink to="/home/lists">
//         <Sidebaroption Icon={ListAltIcon} text="Lists/" />
//       </Customlink>
//       <Customlink to="/home/profile">
//         <Sidebaroption Icon={PermIdentityIcon} text="Profile/" />
//       </Customlink>
//       <Customlink to="/home/more">
//         <Sidebaroption Icon={MoreHorizIcon} text="More/" />
//       </Customlink>
//       <Button variant="outlined" className="sidebar__tweet" fullWidth>
//         Tweet
//       </Button>
//       <div>
//         <Avatar
//           src={
//             loggedinuser.profileImage ||
//             "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//           }
//         />
//         <div className="user__info">
//           <h4>{loggedinuser.name || user?.displayname || "Unknown User"}</h4>
//           <h5>@{username}</h5>
//         </div>
//         <IconButton
//           size="small"
//           sx={{ ml: 2 }}
//           aria-controls={openmenu ? "basic-menu" : undefined}
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           <MoreHorizIcon />
//         </IconButton>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={openmenu}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={() => navigate("/home/profile")}>
//             <Avatar
//               src={
//                 loggedinuser.profileImage ||
//                 "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
//               }
//             />
//             <div className="user__info">
//               <h4>{loggedinuser.name || user?.displayname || "Unknown User"}</h4>
//               <h5>@{username}</h5>
//               <ListItemIcon>
//                 <DoneIcon />
//               </ListItemIcon>
//             </div>
//           </MenuItem>
//           <Divider />
//           <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
//           <MenuItem onClick={handlelogout}>Logout @{username}</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import {
  Twitter as TwitterIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  PermIdentity as PermIdentityIcon,
  MoreHoriz as MoreHorizIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Customlink from "./Customlink";
import Sidebaroption from "./Sidebaroption";
import "./sidebar.css";
import useLoggedinuser from "../../hooks/useLoggedinuser";

const Sidebar = ({ handlelogout, user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const { loggedinuser } = useLoggedinuser(); // Destructure loggedinuser
  const navigate = useNavigate();

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const username = user?.email?.split("@")[0] || "Unknown";

  // Ensure loggedinuser is not null before rendering its properties
  const userProfileImage = loggedinuser?.profileImage || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  const userName = loggedinuser?.name || user?.displayname || "Unknown User";

  return (
    <div>
      <TwitterIcon className="sidebar_twittericon" />
      <Customlink to="/home/feed">
        <Sidebaroption active Icon={HomeIcon} text="Home/" />
      </Customlink>
      <Customlink to="/home/explore">
        <Sidebaroption Icon={SearchIcon} text="Explore/" />
      </Customlink>
      <Customlink to="/home/notification">
        <Sidebaroption Icon={NotificationsNoneIcon} text="Notifications/" />
      </Customlink>
      <Customlink to="/home/messages">
        <Sidebaroption Icon={BookmarkBorderIcon} text="Messages/" />
      </Customlink>
      <Customlink to="/home/bookmarks">
        <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmarks/" />
      </Customlink>
      <Customlink to="/home/lists">
        <Sidebaroption Icon={ListAltIcon} text="Lists/" />
      </Customlink>
      <Customlink to="/home/profile">
        <Sidebaroption Icon={PermIdentityIcon} text="Profile/" />
      </Customlink>
      <Customlink to="/home/more">
        <Sidebaroption Icon={MoreHorizIcon} text="More/" />
      </Customlink>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <div>
        {/* Only render the profile info if loggedinuser is not null */}
        {loggedinuser ? (
          <>
            <Avatar src={userProfileImage} />
            <div className="user__info">
              <h4>{userName}</h4>
              <h5>@{username}</h5>
            </div>
            <IconButton
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openmenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openmenu}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate("/home/profile")}>
                <Avatar src={userProfileImage} />
                <div className="user__info">
                  <h4>{userName}</h4>
                  <h5>@{username}</h5>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
              <MenuItem onClick={handlelogout}>Logout @{username}</MenuItem>
            </Menu>
          </>
        ) : (
          <div>Loading user info...</div> // Placeholder while user data is loading
        )}
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const posts=({p})=> {
    const {name, username,  photo, posts, profilePhoto} = p;
    return (
        <div className="posts">
            <div className="posts__avatar">
                <Avatar src={profilePhoto} />
            </div>
            <div className="posts__body">
                <div className="posts__header">
                    <div className="posts__headerText">
                        <h3>
                            {name}{" "}
                            <span className="posts__headerSpecial">
                                <VerifiedUserIcon className="posts__badge" />
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="posts__headerDescription">
                        <p>{posts}</p>
                    </div>
                </div>
                <img src={photo} alt={`${name}'s post`} width="500" />
                <div className="posts__footer">
                    <ChatBubbleOutlineIcon className="posts__footer_icon" fontSize="small" />
                    <RepeatIcon className="posts__footer_icon" fontSize="small" />
                    <FavoriteBorderIcon className="posts__footer_icon" fontSize="small" />
                    <PublishIcon className="posts__footer_icon" fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default posts;
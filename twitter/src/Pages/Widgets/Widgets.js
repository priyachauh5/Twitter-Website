import React from "react";
import "./widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1816174440071241866"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Valorant"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widgets;

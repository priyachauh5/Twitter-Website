import React from 'react';
import './sidebaroption.css';

// Correct the parameter to destructure props
const Sidebaroption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      {Icon && <Icon />} {/* Render Icon only if it's provided */}
      <h2>{text}</h2>
    </div>
  );
};

export default Sidebaroption;


import React from "react";
import "./user.css";
function UserHead({ widths, heights, left, top, right, bottom, backgroundImage}) {
  return (
    <div
      className="userHead"
      style={{
        
        width: widths,
        height: heights,
        left,
        right,
        bottom,
        top,
        
      }}
    >
      <img className="image-component" src={backgroundImage} alt="" />
    </div>
  );
}

export default UserHead;

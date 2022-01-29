import React from "react";
import "./user.css";
function UserHead({ widths, heights, left, top, right, bottom, backgroundImage }) {
  console.log(backgroundImage);
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
        backgroundImage: backgroundImage,
      }}
    ></div>
  );
}

export default UserHead;

import React from "react";
import "./user.css";
function UserHead({ widths, heights }) {
  return (
    <div className="userHead" style={{ width: widths, height: heights }}></div>
  );
}

export default UserHead;

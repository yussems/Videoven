import React from "react";
import Play from "./helper/Play";
import "./interaction.css";
import RightSide from "./RightSide";
function Interaction() {
  return (
    <div className="interaction-container">
      <div className="container-interaction">
        <div className="section-start"></div>
        <div className="section-photo">
          <div className="inner-section-photo">
            <p className="time">00:06 / 00:09</p>
            <Play className='player' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction;

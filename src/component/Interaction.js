import React from "react";
import BoxModel from "./helper/BoxModel";
import Play from "./helper/Play";
import "./interaction.css";
import InteractionRightSide from "./InteractionRightSide";
function Interaction() {
  return (
    <div className="interaction-container">
      <div className="interaction-sides">

      
      <div className="container-interaction">
        <div className="section-start"></div>
        <div className="section-photo">
          <div className="inner-section-photo">
            <p className="time">00:06 / 00:09</p>
            <Play className="player" color="#6204AC" />
            <p className="interaction-phone-paraf">
              Nasıl cevaplamak istersiniz?
            </p>
            <BoxModel />
            <p className="interaction-bottom-paraf">Göndermeden önce alıştırma yapabilirsin</p>
          </div>
        </div>
      </div>
    <InteractionRightSide />

    </div>
    </div>
  );
}

export default Interaction;

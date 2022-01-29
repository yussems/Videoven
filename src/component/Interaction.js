import React from "react";
import BoxModel from "./helper/BoxModel";
import Play from "./helper/Play";
import "./interaction.css";
function Interaction() {
  return (
    <div className="interaction-container">
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
            <div className="paraf-ball-container">
              <div className="line-ball"></div>
              <p className="phone-bottom-paraf">
                Göndermeden önce alıştırma yapabilirsin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction;

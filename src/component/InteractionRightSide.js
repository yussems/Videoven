import React from "react";
import UserHead from "./helper/UserHead";
import "./intreactionRigt.css";
import LeftCorner from "./svgs/LeftCorner";
import MiddleLineSvg from "./svgs/MiddleLineSvg";
import RightCorner from "./svgs/RightCorner";

function InteractionRightSide() {
  return (
    <div className="userContent-İnteraction">
      <div className="intreaction-right-container">
        <h3 className="interaction-head">
          Güçlü Bir İletişim İçin Videoyla Hitap Edin
        </h3>
        <MiddleLineSvg className="svgMiddleline" />
        <div className="right-box">
          <div className="interaction-card">
            <div className="left-top-corner">
              <LeftCorner />
            </div>
            <p>Tanem Seçkin</p>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "0 5px",
              }}
            ></span>
            <p> CRO @Koluman</p>

            <div className="right-bottom-corner">
              <RightCorner />
            </div>
          </div>
        </div>
      </div>

      {/* <UserHead widths='127' heights='127'/>
      <UserHead widths='62' heights='62'/>
      <UserHead widths='93' heights='93'/>
      <UserHead widths='51' heights='51'/>
      <UserHead widths='60' heights='60'/>
      <UserHead widths='72' heights='72'/> */}
    </div>
  );
}

export default InteractionRightSide;

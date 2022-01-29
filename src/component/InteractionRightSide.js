import React from "react";
import UserHead from "./helper/UserHead";
import "./intreactionRigt.css";
import LeftCorner from "./svgs/LeftCorner";
import MiddleLineSvg from "./svgs/MiddleLineSvg";
import RightCorner from "./svgs/RightCorner";

import imageOne from "../assets/images/userimages/image1.png";
import imageTwo from "../assets/images/userimages/image2.png";
import imageThree from "../assets/images/userimages/image3.png";
import imageFour from "../assets/images/userimages/image4.png";
import imageFive from "../assets/images/userimages/image5.png";
import imageSix from "../assets/images/userimages/image6.png";

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
              <p>
                Tanem Seçkin
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
              </p>
            </div>

            <div className="contentBox-cont">
              <p className="contentBox-paraf">
                Kısa zamanda, çok daha az eforla, büyük ölçekli geri dönüşler
                alabildiğimiz için çalışmalarımızdaki verimi ciddi biçimde
                artırdı Videoven.
              </p>
            </div>
            <div className="right-bottom-corner">
              <RightCorner />
            </div>
          </div>
        </div>
      </div>

      <UserHead deneme='selam'  background={imageOne} right={0} widths={127} heights={127} />
      <UserHead
        backgroundImage={imageSix}
        top={210}
        right={200}
        widths={72}
        heights={72}
      />
      <UserHead background={imageTwo} bottom={80} widths={60} heights={60} />
      <UserHead
        background={imageFour}
        bottom={250}
        right={700}
        widths={93}
        heights={93}
      />
      <UserHead
        background={imageThree}
        bottom={60}
        right={450}
        widths={51}
        heights={51}
      />
      <UserHead
        background={imageFive}
        right={400}
        top={80}
        widths={62}
        heights={62}
      />
    </div>
  );
}

export default InteractionRightSide;

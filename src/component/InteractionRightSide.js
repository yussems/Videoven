import React from "react";
import UserHead from "./helper/UserHead";
import "./intreactionRigt.css";
import LeftCorner from "./svgs/LeftCorner";
import MiddleLineSvg from "./svgs/MiddleLineSvg";
import RightCorner from "./svgs/RightCorner";

import {
  imageSix,
  imageFive,
  imageFour,
  imageThree,
  imageTwo,
  imageOne,
} from "../data/imagesData";

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

      <UserHead
        deneme="selam"
        backgroundImage={imageTwo}
        right={0}
        widths={124}
        heights={124}
      />
      <UserHead
        backgroundImage={imageFour}
        top={210}
        right={200}
        widths={72}
        heights={72}
      />
      <UserHead
        backgroundImage={imageFive}
        bottom={80}
        widths={60}
        heights={60}
      />
      <div className="animation">
        <img className='image-component' src={imageOne} alt="" />
      </div>
      <UserHead
        backgroundImage={imageSix}
        bottom={60}
        right={450}
        widths={50}
        heights={50}
      />
      <UserHead
        backgroundImage={imageThree}
        right={400}
        top={80}
        widths={62}
        heights={62}
      />
    </div>
  );
}

export default InteractionRightSide;

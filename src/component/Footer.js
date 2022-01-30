import React from "react";
import "./footer.css";
import Play from "./helper/Play";
import FooterSvgOne from "./svgs/FooterSvgOne";
import FooterSvgTwo from "./svgs/FooterSvgTwo";
import SvgFooterContainer from "./svgs/SvgFooterContainer";
import { footerImage } from "../data/imagesData";
import SvgStart from "./svgs/SvgStart";

import FooterRightSide from "./FooterRightSide";
import FooterLeftSide from "./FooterLeftSide";

function Footer() {
  return (
    <div className="footer-first">
      <div className="footer-head">
        <h3>Kolayca Kullanın </h3>
        <p>
          Videoven’ın sade ve kolay kullanılan arayüzü sayesinde videolarınızı
          oluşturmaya başlamak için vakit kaybetmeyin.{" "}
        </p>
      </div>
      <div className="svg-start">
        <SvgStart />
      </div>

      <div className="footer-container">
        <div className="svg-footer-container">
          <SvgFooterContainer />
        </div>

        <FooterSvgOne />
        <FooterSvgTwo />
        <div className="footer-content">
          <div className="footer-boxes">
            <FooterLeftSide />
            <div className="footer-middle">
              <div className="footer-play">
                <div className="footer-middle-play">
                  <Play color={"#5B44F3"} hover={true} />
                </div>
                <img src={footerImage} alt="" />
              </div>
            </div>
              <FooterRightSide />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

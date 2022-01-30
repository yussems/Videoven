import React from "react";
import FooterButton from "./AntdesignCustomComponent/FooterButton";
import InputSelect from "./helper/InputSelect";

function FooterLeftSide() {
  return (
    <div className="footer-leftSide">
      <div className="footer-head">
        <p>Videoven</p>
      </div>
      <InputSelect />
      <FooterButton />

      <button className="footter-submit-btn">Yeni Video</button>
    </div>
  );
}

export default FooterLeftSide;

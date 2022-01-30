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
        
    </div>
  );
}

export default FooterLeftSide;

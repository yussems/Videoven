import {
  CloseOutlined,
  DeleteOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import React, { useState } from "react";
import "./footerRight.css";
import { Input } from "antd";
import InputSelect from "./helper/InputSelect";
import { Checkbox } from "antd";

function FooterRightSide() {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="footer-rightside">
      <div className="footer-right-close">
        <ShareAltOutlined className="footer-right-top" />
        <DeleteOutlined className="footer-right-top" />
        <CloseOutlined className="footer-right-top" />
      </div>
      <Input className="input-footer" />
      <div className="footer-selected-btn">
        <button onClick={handleClick} className={active ? "active" : ""}>
          Cevap
        </button>
        <button>Video</button>
        <button>Mantık</button>
      </div>
      {active ? (
        <div className="answer-active-page">
          <p>Cevap türü seçiniz</p>
          <InputSelect option={"Link"} />
          <p>Link Metni</p>
          <Input
            className="input-footer"
            style={{marginBottom:'5px'}}
            placeholder="Lütfen Bir Şeyler Yazın"
          />
          <button className="footter-submit-btn">
            invidza.video/faruk_19192
          </button>
          <div style={{display:'flex',alignItems:'center'}}>
            <Checkbox />
            <span style={{marginLeft:10}}>seçenek ekle</span>
          </div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span>Video Süresi</span>
              <div style={{width:'70px',height:'30px',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#9a80ad',borderRadius:'5px'}}>120</div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span>Gösterimler</span>
              <div style={{width:'70px',height:'30px',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#9a80ad',borderRadius:'5px'}}>60</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FooterRightSide;

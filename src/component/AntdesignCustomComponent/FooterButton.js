import React from 'react';
import { BellOutlined, DeleteOutlined, HomeOutlined, PieChartOutlined, UsergroupAddOutlined } from "@ant-design/icons/lib/icons";
function FooterButton() {
  return <div className="footter-button">
  <button className="footer-leftside-button">
    <HomeOutlined /> 
      <a href="#">Anasayfa</a>
  </button>
  <button className="footer-leftside-button">
  <UsergroupAddOutlined />
      <a href="#">Kişiler</a>
  </button>
  <button className="footer-leftside-button">
  <BellOutlined />
      <a href="#">Etiketler</a>
  </button>
  <button className="footer-leftside-button">
    <PieChartOutlined /> 
      <a href="#">Raporlar</a>
  </button>
  <button className="footer-leftside-button">
    <DeleteOutlined />  
      <a href="#">Çöp Kutusu</a>
  </button>
</div>
}

export default FooterButton;

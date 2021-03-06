import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="Header">
      <div className="header-logo">
        <p className="logo">Videoven</p>
      </div>
        <ul>
          <li>
            <a href="#">Bize Katıl</a>
          </li>
          <li>
            <a href="#">Stratejiler</a>
          </li>
          <li>
            <a href="#">Plan</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Yardım</a>
          </li>
        </ul>
      <div className="btn-group">
        <button className="outline">Oturum Aç</button>
        <button className="solid">Ücretsiz Dene</button>
      </div>
    </div>
  );
}

export default Header;

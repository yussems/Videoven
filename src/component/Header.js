import React from "react";
import './header.css'
function Header() {
  return (
    <div>
      <p>Videoven</p>
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
      <div>
          <button>Oturum Aç</button>
          <button>Ücretsiz Dene</button>
      </div>
    </div>
  );
}

export default Header;

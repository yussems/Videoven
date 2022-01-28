import React from "react";
import "./content.css";
function Content() {
  return (
    <main>
      <div className="left-side">
        <div className="vektor-top"></div>
        <div className="ball"></div>
        <div className="ball-two"></div>

        <div className="content">
          <h1>İşinizi Güçlendirecek Videolar</h1>
          <h2>Artık İnteraktif</h2>
          <p className="paraf">
            Videoven ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın.
            Tek hamlede binlerce kullanıcıdan zahmetsizce bilgi alın.
            Maliyetlerinizi azaltın, müşteri memnuniyetini ve satışlarınızı
            artırın. Anlatan, seçenek sunan, bilgi toplayan videolarla çevrimiçi
            iletişimin yeni seviyesine adım atın.
          </p>
          <button className="content-button">Hemen Deneyin</button>
        </div>
        <div className="vektor-container">
          <div className="vektor-bottom"></div>
        </div>
      </div>

      <div className="right-side">

        <div className="right-container">
          <div className="picture-content">
            <div className="inner-input"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;

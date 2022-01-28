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
          <div className="outline-container"></div>
          <svg
            className="cont-star"
            width="66"
            height="64"
            viewBox="0 0 66 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66 33.5C66 16.6553 52.3447 3 35.5 3V3C18.6553 3 5 16.6553 5 33.5V33.5C5 50.3447 18.6553 64 35.5 64H66V33.5Z"
              fill="black"
            />
            <path
              d="M60.5 30.5C60.5 13.9368 46.8218 0.5 30.2479 0.5C13.9502 0.5 0.5 13.7129 0.5 30C0.5 46.2924 13.7076 59.5 30 59.5H60.5V30.5Z"
              stroke="black"
            />
            <path
              d="M33.0979 22.8541C33.6966 21.0115 36.3034 21.0115 36.9021 22.8541L38.8167 28.7467C39.0845 29.5708 39.8524 30.1287 40.7189 30.1287H46.9147C48.8522 30.1287 49.6577 32.6079 48.0903 33.7467L43.0777 37.3885C42.3767 37.8978 42.0834 38.8006 42.3512 39.6246L44.2658 45.5172C44.8645 47.3598 42.7556 48.8921 41.1881 47.7533L36.1756 44.1115C35.4746 43.6022 34.5254 43.6022 33.8244 44.1115L28.8119 47.7533C27.2444 48.8921 25.1355 47.3598 25.7342 45.5172L27.6488 39.6246C27.9166 38.8006 27.6232 37.8978 26.9223 37.3885L21.9097 33.7467C20.3423 32.6079 21.1478 30.1287 23.0853 30.1287H29.2812C30.1476 30.1287 30.9155 29.5708 31.1833 28.7467L33.0979 22.8541Z"
              fill="white"
            />
          </svg>

          <div className="picture-content">
            <div className="inner-input">Merhaba :)</div>
            <div className="outline-input"></div>

            <div className="play-cicle">
              <svg
                width="27"
                height="27"
                viewBox="0 0 19 21"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5714 8.98266C18.9047 9.75246 18.9047 11.677 17.5714 12.4468L3.42855 20.6121C2.09522 21.3819 0.428554 20.4197 0.428554 18.8801L0.428554 2.54932C0.428554 1.00972 2.09522 0.0474702 3.42855 0.817271L17.5714 8.98266Z"
                  fill="#5B44F3"
                />
              </svg>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;

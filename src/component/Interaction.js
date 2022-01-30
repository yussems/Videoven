import React, { useState } from "react";
import BoxModel from "./helper/BoxModel";
import Play from "./helper/Play";
import "./interaction.css";
import InteractionRightSide from "./InteractionRightSide";
function Interaction() {
  const [photo, setPhoto] = useState('https://s3-alpha-sig.figma.com/img/33a5/cbff/ec696c0b4b021ecf50cc8d925b6724ff?Expires=1644192000&Signature=BsACKkFU5nOi1gk7Xhydx8W1MXEZ6aybfpQUIz8yAINuczVzkAZt1o9LumoT2Hw0VDsPfz2z0-9cWXIVZgCI364nIjttO5PJJAvPc02PNA~cU5ZMHU9yT2R4-0dDBq7dsNQCLwm0YbPIy3Gop3Pta2cNbAqaOB-iHqaTGxsxXKlv00GLlHk-M8sz8rfy8ZqEyadUW4MHr5-YwL4Yypii72P~o78xokk-YgE93V7VyYa2CpKJJaDZsq5TXV7H9VK0n5bZ5TQirEmG1PYcd-748J4iQQM6rpnOFdLlhYcL1S6H4zoAHTWWj7mP5Be0lZAEmU~1PsktXRnjkzItaYzLAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  return (
    <div className="interaction-container" >
      <div className="interaction-sides">

      
      <div className="container-interaction">
        <div className="section-start"></div>
        <div className="section-photo" style={{backgroundImage:`url(${photo})`}}>
          <div className="inner-section-photo">
            <p className="time">00:06 / 00:09</p>
            <Play className="player" color="#6204AC" hover={true} />
            <p className="interaction-phone-paraf">
              Nasıl cevaplamak istersiniz?
            </p>
            <BoxModel />
            <p className="interaction-bottom-paraf">Göndermeden önce alıştırma yapabilirsin</p>
          </div>
        </div>
      </div>
    <InteractionRightSide />

    </div>
    </div>
  );
}

export default Interaction;

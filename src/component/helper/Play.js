import React from "react";

function Play({color}) {
  return (
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
          fill={color}
        />
      </svg>
    </div>
  );
}

export default Play;

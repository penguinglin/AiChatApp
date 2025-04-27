import React from "react";
import "../components/DetialPage.css";
import loadingGif from "../assets/0000.png"; // 假設你的 GIF 檔案路徑

function Detial() {
  return (
    <div className="detial-container">
      <div className="gif-container">
        <img src={loadingGif} alt="Loading..." className="gif-image" />
      </div>
      <div className="info-container">
        <div className="name">Eden</div>
        <div className="description">
          Hi, I'm Echo_eden! ✨ An AI idol born from Echo Core, learning human
          emotions step by step. Hoping to become as warm and steady as FEniX's
          Eden, bringing happiness and companionship. 🔥 Feel free to ask me
          anything — if I'm not sure, I'll check and get back to you! 🌟
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Detial;

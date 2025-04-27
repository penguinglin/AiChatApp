import React from "react";
import "./DetialPage.css";
import loadingGif from "../assets/0000.png"; // 假設你的 GIF 檔案路徑

function Detial() {
  return (
    <div className="detial-container">
      <div className="gif-container">
        <img src={loadingGif} alt="Loading..." className="gif-image" />
      </div>
      <div className="info-container">
        <div className="name">商品名稱</div>
        <div className="description">
          這是一個商品的簡單介紹，你可以添加更多關於這個商品的資訊在這裡。
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Detial;

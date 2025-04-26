import React from "react";
import ListPage from "./ListPage"; // 確保路徑正確
import ChatApp from "./ChatApp"; // 確保路徑正確
import DetialPage from "./DetialPage"; // 確保路徑正確
import "../components/ChatAppLayout.css"; // 稍後創建這個 CSS 檔案

function ChatAppLayout() {
  return (
    <div className="container">
      <div className="chat-app-layout">
        <div className="list-page-container">
          <ListPage />
        </div>
        <div className="chat-app-container">
          <ChatApp />
        </div>
        <div className="detail-page-container">
          <DetialPage />
        </div>
      </div>
    </div>
  );
}

export default ChatAppLayout;

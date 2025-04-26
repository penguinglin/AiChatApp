import React from "react";
import { Link } from "react-router-dom";
import "../components/ChatApp.css"; // Import CSS file
import PersonImage from "/vite.svg"; // Assuming you have a default profile image
// import viteLogo from "/vite.svg";

function ChatApp() {
  return (
    <div className="chat-app-container">
      <header className="chat-header">
        {/* You can put the application title or other header content here */}
        <h1>Chatting</h1>
        <div className="profile-container">
          <Link to="/profile" className="profile-button">
            👤 {/* Profile page icon */}
          </Link>
          <Link to="/settings" className="settings-button">
            ⚙️ {/* Settings icon */}
          </Link>
        </div>
      </header>

      <main className="chat-main">
        <div className="chat-window">
          <div className="messages">
            {/* Pretend there are some messages */}
            <div className="message left">
              Hi~ this is a message on the left
            </div>
            <div className="message right">Hello! A reply on the right</div>
          </div>
        </div>
      </main>

      <footer className="chat-footer">
        <div className="input-container">
          <button className="input-button">🖼️</button> {/* Image button */}
          <input
            type="text"
            placeholder="Enter message..."
            className="message-input"
          />
          <button className="input-button">😊</button> {/* Sticker button */}
          <button className="send-button">➔</button> {/* Send button */}
        </div>
      </footer>

      {/* <aside className="chat-sidebar-right">
        
      </aside> */}
    </div>
  );
}

export default ChatApp;

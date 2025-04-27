import React from "react";
import "../components/ChatApp.css";
import avatarImg from "../assets/img/avatar.png";
import phoneImg from "../assets/img/phone.png";
import videoImg from "../assets/img/video.png";
import infoImg from "../assets/img/info.png";
import imgImg from "../assets/img/img.png"; // 假設圖片也放在assets/img
import cameraImg from "../assets/img/camera.png";
import micImg from "../assets/img/mic.png";
import emojiImg from "../assets/img/emoji.png";

function ChatApp() {
  return (
    <div className="ChatApp">
      <div className="top">
        <div className="user">
          <img src={avatarImg} alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src={phoneImg} alt="phone" />
          <img src={videoImg} alt="video" />
          <img src={infoImg} alt="info" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src={avatarImg} alt="avatar" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src={avatarImg} alt="avatar" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={avatarImg} alt="avatar" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src={avatarImg} alt="avatar" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>



      <div className="bottom">
        <div className="icons">
          <img src={imgImg} alt="img" />
          <img src={cameraImg} alt="camera" />
          <img src={micImg} alt="mic" />
        </div>
        <input type="text" placeholder="Type a message..." />
        <div className="emoji">
          <img src={emojiImg} alt="emoji" />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default ChatApp;


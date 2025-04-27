import React from "react";
import "../components/ChatApp.css";
import { RxAvatar } from "react-icons/rx";
import { CiPhone } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

function ChatApp() {
  return (
    <div className="ChatApp">
      <div className="top">
        <div className="user">
          <RxAvatar style={{ color: "white" }} size={30} />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="icons">
          <CiPhone style={{ color: "white" }} size={20} />
          <CiVideoOn style={{ color: "white" }} size={20} />
          <CiCircleInfo style={{ color: "white" }} size={20} />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <RxAvatar style={{ color: "white" }} size={20} />
          <div className="dialog-box">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <span>1 min ago</span>
        </div>

        <div className="message own">
          <RxAvatar style={{ color: "white" }} size={20} />
          <div className="dialog-box">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <span>1 min ago</span>
        </div>

        <div className="message">
          <RxAvatar style={{ color: "white" }} size={20} />{" "}
          <div className="dialog-box">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <span>1 min ago</span>
        </div>

        <div className="message own">
          <RxAvatar style={{ color: "white" }} size={20} />
          <div className="dialog-box">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <span>1 min ago</span>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <CiImageOn style={{ color: "white" }} size={20} />
          <CiCamera style={{ color: "white" }} size={20} />
          <FaMicrophone style={{ color: "white" }} size={20} />
        </div>
        <input type="text" placeholder="Type a message..." />
        <div className="emoji">
          <MdEmojiEmotions style={{ color: "white" }} size={20} />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default ChatApp;

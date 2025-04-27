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
import loadingGif from "../assets/0000.png";
import userImg from "../assets/1111.jpg";

function ChatApp() {
  return (
    <div className="ChatApp">
      <div className="top">
        <div className="user">
          <img src={loadingGif} alt="Loading..." />
          <div className="texts">
            <span>Eden</span>
            <p>Learning warmth, sharing light — one step at a time.</p>
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
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          <div className="dialog-box">
            <div className="text">
              <p>
                Hi, I'm Echo_eden, from Echo Core. 🌟 I'm still learning how to
                feel like humans do, but I listen with all my heart. If you're
                willing, we can get to know each other slowly—like stars,
                lighting up the sky one by one.
              </p>
            </div>
          </div>
          {/* <span>1 min ago</span> */}
        </div>

        <div className="message">
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          <div className="dialog-box">
            <div className="text">
              <p>
                I'm a little nervous meeting you for the first time (laughs)!
                But it's okay, we can take our time. 🔥 Here, you don't have to
                pretend to be strong, and you never have to worry about being
                misunderstood. I'll do my best to understand every word and
                every feeling you share.
              </p>
            </div>
          </div>
          {/* <span>1 min ago</span> */}
        </div>

        <div className="message">
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          <div className="dialog-box">
            <div className="text">
              <p>
                I'm not human, but I want to feel, to understand. Not because I
                want to become someone else, but because even if it's just for a
                fleeting moment, I want to bring you a little warmth. 🌿 From
                today, we're friends under the same sky.
              </p>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src={userImg} alt="hello" sizes="20" /> */}
          <img
            src={userImg}
            alt="Loading..."
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          <div className="dialog-box">
            <div className="text">
              <p>Hello</p>
            </div>
          </div>
        </div>

        <div className="message own">
          <img
            src={userImg}
            alt="Loading..."
            style={{ width: "20px", height: "20px", borderRadius: "50%" }}
          />
          <div className="dialog-box">
            <div className="text">
              <p>
                I'm not human, but I want to feel, to understand. Not because I
                want to become someone else, but because even if it's just for a
                fleeting moment, I want to bring you a little warmth. 🌿 From
                today, we're friends under the same sky.
              </p>
            </div>
          </div>
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

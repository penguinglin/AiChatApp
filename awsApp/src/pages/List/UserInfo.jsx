import "../../components/List/UserInfo.css";
import userImg from "../../assets/img/avatar.png";
import { CiSettings } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { PiDotsThree } from "react-icons/pi";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"; // 你的firebase路徑
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserInfo = () => {
  const [user, setUser] = useState(null); // 抓auth用
  const [bio, setBio] = useState(""); // 抓bio用
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);

        // Firestore 抓 bio
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setBio(userDoc.data().bio || "");
        }
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // 等資料載入
  }

  return (
    <div className="UserInfo">
      <div className="user">
        <img src={userImg} alt="hello" />
        <h2>{user.displayName || "Anonymous"}</h2>
      </div>
      <div className="icons">
        <Link to="/profile">
          <PiDotsThree color="white" size={24} />
        </Link>
        <FaVideo color="white" size={24} />
        <Link to="/settings">
          <CiSettings color="white" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;

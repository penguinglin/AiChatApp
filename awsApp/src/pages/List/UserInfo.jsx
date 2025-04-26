import "../../components/List/UserInfo.css";
import { CiSettings } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { PiDotsThree } from "react-icons/pi";
import { Link } from "react-router-dom";
const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="user">
        <img src="./img/user.png" alt=" hello" />
        <h2>John Doe</h2>
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

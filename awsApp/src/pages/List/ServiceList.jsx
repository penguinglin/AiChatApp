import "../../components/List/ServiceList.css";
import { CiSearch } from "react-icons/ci";
import avatar from "../../assets/react.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { MdAutoFixNormal } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";

const ServiceList = () => {
  return (
    <div>
      <div className="ServiceList">
        <div className="search">
          <div className="searchBar">
            <CiSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="searchitem">
          <div className="item">
            <FaRocketchat color="white" size={40} />
            <div className="texts">
              <span>Eden</span>
            </div>
          </div>

          <div className="item">
            <MdLiveTv color="white" size={40} />
            <div className="texts">
              <span>RealX Hub</span>
            </div>
          </div>

          <div className="item">
            <TiSocialFacebook color="white" size={40} />
            <div className="texts">
              <span>Eden's Blog</span>
            </div>
          </div>

          <div className="item">
            <MdAutoFixNormal color="white" size={40} />
            <div className="texts">
              <span>Playfix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

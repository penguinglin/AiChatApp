import "../../components/List/ServiceList.css";
import { CiSearch } from "react-icons/ci";
import avatar from "../../assets/img/avatar.png";

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
            <img src={avatar} alt="avatar" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello everyone!</p>
            </div>
          </div>

          <div className="item">
            <img src={avatar} alt="avatar" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello everyone!</p>
            </div>
          </div>

          <div className="item">
            <img src={avatar} alt="avatar" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello everyone!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

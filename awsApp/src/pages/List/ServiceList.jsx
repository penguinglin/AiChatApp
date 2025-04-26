import "../../components/List/ServiceList.css";
import avatar from "../../assets/img/avatar.png";


const ServiceList = () => {
  return (
  <div>
    <div className="ServiceList">
      <div className="search">
        <div className="searchBar">
          <img src="../../assets/img/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <img src="../../assets/img/plus.png" alt="" />
    </div>

    <div>
      <div className="item">
      <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello everyone!</p>
        </div>
      </div>
    </div>
    <div>
      <div className="item">
      <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello everyone!</p>
        </div>
      </div>
    </div>
    <div>
      <div className="item">
      <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello everyone!</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ServiceList;

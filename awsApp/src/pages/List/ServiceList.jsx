import "../../components/List/ServiceList.css";

const ServiceList = () => {
  return (
    <div className="ServiceList">
      <div className="search">
        <div className="searchBar">
          <img src="../../assets/img/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <img src="../../assets/img/plus.png" alt="" />
    </div>
  );
};

export default ServiceList;

import "../../components/List/ServiceList.css";
import { CiSearch } from "react-icons/ci";

const ServiceList = () => {
  return (
    <div className="ServiceList">
      <div className="search">
        <div className="searchBar">
          <CiSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

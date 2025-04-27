import React from "react";
import "../../components/List/ListPage.css";
import UserInfo from "./UserInfo";
import ServiceList from "./ServiceList";

function List() {
  return (
    <div className="List">
      <div className="UserInfo">
        <UserInfo />
      </div>

      <div className="Service">
        <ServiceList />
      </div>
    </div>
  );
}

export default List;

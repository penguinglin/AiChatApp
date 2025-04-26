import React from "react";
import "../../components/List/ListPage.css";
import UserInfo from "./UserInfo";
import ServiceList from "./ServiceList";

function List() {
  return (
    <div className="List">
      <UserInfo />
      <ServiceList />
    </div>
  );
}

export default List;

import "../../components/List/UserInfo.css";

const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="user">
        <img src="../../assets/img/avatar.png" alt="" />
        <h2>John Doe</h2>
      </div>
      <div className="icons">
        <img src="../../assets/img/more.png" alt="" />
        <img src="../../assets/img/video.png" alt="" />
        <img src="../../assets/img/edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;

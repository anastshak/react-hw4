import { useSelector } from "react-redux";
import {
  selectUsersItems,
  selectUsersError,
  selectUsersLoading,
} from "../store/users/selectors";
import { Link } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const items = useSelector(selectUsersItems);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  return (
    <>
      <div className="users">
        <h2>Users</h2>
        {loading && <div> Loading... </div>}
        {error && <div>Error</div>}
        {items.map((item) => (
          <div className="users-item">
            <div className="users-item__header">
              <h3 className="users-item__title"> 
                GitHub login: {item.login}
              </h3>
            </div>
            <div>ID: {item.id}</div>
            <div>Type: {item.type}</div>
            <div className="users-item__owner">
              <img src={item.avatar_url} alt="avatar-owner"></img>
            </div>
            <Link to={"/user/" + item.id}>
              <button className="button">Перейти</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
import { useSelector } from "react-redux";
import { selectUsersItems } from "../store/users/selectors";
import "./Users.css";

const Home = () => {
  const items = useSelector(selectUsersItems);

  return (
    <>
      <div className="users">
        <h5> У нас зарегистрировано {items.length} пользователей</h5>
      </div>
    </>
  );
};

export default Home;

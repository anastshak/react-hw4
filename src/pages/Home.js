import { useSelector } from "react-redux";
import { selectRepositoriesItems } from "../store/repositories/selectors";
import "./Repositories.css";

const Home = () => {
  const items = useSelector(selectRepositoriesItems);

  return (
    <>
      <div className="repositories">
        <h5> У нас зарегистрировано {items.length} пользователей</h5>
      </div>
    </>
  );
};

export default Home;

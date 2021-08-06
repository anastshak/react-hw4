import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories } from "../store/repositories/actions";
import {
  selectRepositoriesItems,
  selectRepositoriesError,
  selectRepositoriesLoading,
} from "../store/repositories/selectors";
import "./Repositories.css";

const Repositories = () => {
  const items = useSelector(selectRepositoriesItems);
  const loading = useSelector(selectRepositoriesLoading);
  const error = useSelector(selectRepositoriesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);

  return (
    <>
      <div className="repositories">
        <h2>Users</h2>
        {loading && <div> Loading... </div>}
        {error && <div>Error</div>}
        {items.map((item) => (
          <div className="repositories-item">
            <div className="repositories-item__header">
              <h3 className="repositories-item__title"> GitHub login: {item.login}</h3>
            </div>
            <div>ID: {item.id}</div>
            <div>Type: {item.type}</div>
            <div className="repositories-item__owner">
              <img src={item.avatar_url} alt="avatar-owner"></img>
            </div>
            <button className="button">Перейти</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Repositories;

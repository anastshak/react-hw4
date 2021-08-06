import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserEmail,
  selectUserAge,
} from "../store/user/selectors";
import { setName, setEmail, setAge } from "../store/user/actions";

const Profile = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userAge = useSelector(selectUserAge);

  const dispatch = useDispatch();

  const handleChange = (funcAction) => ({ target: { value } }) => {
    console.log(value);
    dispatch(funcAction(value));
  };

  return (
    <>
      <div>
        User Name:{" "}
        <input
          value={userName}
          type="text"
          onChange={handleChange(setName)}
        ></input>
      </div>
      <div>
        User Email:{" "}
        <input
          value={userEmail}
          type="email"
          onChange={handleChange(setEmail)}
        ></input>
      </div>
      <div>
        User Age:{" "}
        <input
          value={userAge}
          type="number"
          onChange={handleChange(setAge)}
        ></input>
      </div>
    </>
  );
};

export default Profile;

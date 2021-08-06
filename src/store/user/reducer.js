import { SET_NAME, SET_EMAIL, SET_AGE } from "./constants";
import { handleActions } from "redux-actions";

const initialState = {
  name: "",
  email: "",
  age: null,
  degree: "",
};

const userReducer = handleActions(
  {
    [SET_NAME]: (state, action) => {
      let name = action.payload.name;
      return { ...state, name: name };
    },
    [SET_EMAIL]: (state, action) => {
      let email = action.payload.email;
      return { ...state, email: email };
    },
    [SET_AGE]: (state, action) => {
      let age = action.payload.age;
      return { ...state, age: age };
    },
  },
  initialState
);

export default userReducer;

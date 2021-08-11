import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./constants";
import { handleActions } from "redux-actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const usersReducer = handleActions(
  {
    [FETCH_USERS_LOADING]: (state, action) => {
      return { ...state, loading: true }; //возвращает предыдущее состояние  и меняет лоадин на тру
    },
    [FETCH_USERS_SUCCESS]: (state, action) => {
      return { ...state, items: action.payload.items, loading: false };
    },
    [FETCH_USERS_ERROR]: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
  },
  initialState
);

export default usersReducer;

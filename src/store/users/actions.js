import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./constants";
import { createActions } from "redux-actions";
import { getUsers } from "../../api";

export const {
  fetchUsersLoading,
  fetchUsersSuccess,
  fetchUsersError,
} = createActions({
  [FETCH_USERS_LOADING]: (loading) => ({ loading }),
  [FETCH_USERS_SUCCESS]: (items) => ({ items }),
  [FETCH_USERS_ERROR]: (error) => ({ error }),
});

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersLoading());
    let data = await getUsers();
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersError({ error }));
  }
};

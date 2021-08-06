import { SET_NAME, SET_EMAIL, SET_AGE } from "./constants";
import { createAction } from "redux-actions";

/* export const setName = (name) => ({ type: SET_NAME, payload: { name } }); */
export const setName = createAction(SET_NAME, (name) => ({ name }));
export const setEmail = createAction(SET_EMAIL, (email) => ({ email }));
export const setAge = createAction(SET_AGE, (age) => ({ age }));

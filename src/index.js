import React from "react";
import ReactDOM from "react-dom";
import /* combineReducers,  createStore*/ "redux";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

/* 1 */
/* const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

const store = createStore(reducer);
store.subscribe(() => console.log("state changed")); //подписка на изменения
console.log("initial", store.getState());

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

console.log("increment", store.getState());

store.dispatch(decrementAction);

console.log("decrement", store.getState()); */

/* 2 */
/* const reducerNumbers = (state = [], action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return [...state, action.payload.value];
    case "REMOVE_NUMBER":
      return state.filter((value) => value !== action.payload.value);
    default:
      return state;
  }
};

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

const rootReduce = combineReducers({
  numbers: reducerNumbers,
  counter: reducerCounter,
});

const store = createStore(rootReduce); //создали хранилище

const addNumber = (value) => ({ type: "ADD_NUMBER", payload: { value } });
const removeNumber = (value) => ({ type: "REMOVE_NUMBER", payload: { value } });

store.dispatch(addNumber(1)); //ф кот позволяет вызывать методы по изм
store.dispatch(addNumber(6));
store.dispatch(addNumber(10));
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });

console.log(store.getState());

store.dispatch(removeNumber(6));
store.dispatch({ type: "DECREASE" });
console.log(store.getState()); */

/* 3 */

/* const reducerNames = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload.value];
    case "REMOVE_NAME":
      return state.filter((value) => value !== action.payload.value);
    case "CHANGE_NAME": {
      return state.map((value, index) =>
        index === action.payload.index ? action.payload.value : value
      );
    }
    default:
      return state;
  }
};

const store = createStore(reducerNames);

const addName = (value) => ({ type: "ADD_NAME", payload: { value } });
const removeName = (value) => ({ type: "REMOVE_NAME", payload: { value } });
const changeName = (value, index) => ({
  type: "CHANGE_NAME",
  payload: { value, index },
});

store.dispatch(addName("Anastasia"));
store.dispatch(addName("Hanna"));
store.dispatch(addName("Julia"));

console.log(store.getState());

store.dispatch(removeName("Hanna"));
store.dispatch(changeName("Ksenia", 0));
console.log(store.getState()); */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

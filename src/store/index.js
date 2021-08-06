import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./user";
import repositoriesReducer from "./repositories";

const rootReducer = combineReducers({
  user: userReducer,
  repositories: repositoriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;

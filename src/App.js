import "./App.css"
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  return (
    <BrowserRouter>
      <ul>
        <NavLink activeStyle={{ color: "red" }} to="/home">
          Home
        </NavLink>
        <br />
        <NavLink activeStyle={{ color: "red" }} to="/users">
          Users
        </NavLink>
      </ul>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/user/:id" component={User}></Route>
        <Route path="*">No match</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

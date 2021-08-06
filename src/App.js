import "./App.css"
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <NavLink activeStyle={{ color: "red" }} to="/home">
          Home
        </NavLink>
        <br />
        <NavLink activeStyle={{ color: "red" }} to="/repositories">
          Users
        </NavLink>
      </ul>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/repositories" component={Repositories}></Route>
        <Route path="*">No match</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

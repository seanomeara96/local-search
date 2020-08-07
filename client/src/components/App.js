import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
// components
import Home from "./Home/Home";
import BottomNav from "./Global/BottomNav/BottomNav";
import UserRegistrationForm from "./Forms/UserRegistrationForm/UserRegistrationForm";
// styles
import "../styles.css";
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={UserRegistrationForm} />
      </Switch>
      <BottomNav />
    </Router>
  );
};
export default App;

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import BottomNav from "./components/nav/bottom-nav/BottomNav";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      <BottomNav />
    </Router>
  );
};

export default App;

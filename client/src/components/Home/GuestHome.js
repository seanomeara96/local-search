import React from "react";
import LoginForm from "../Forms/Users/Login/LoginForm";
const GuestHome = (props) => {
  return (
    <section className="page-section">
      <div className="wrapper">
        <h1 className="ui header">
          Hello and welcome the online irish business hub
        </h1>
        <h2>Please log in</h2>
        <LoginForm />
      </div>
    </section>
  );
};
export default GuestHome;

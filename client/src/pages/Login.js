import React from "react";
import LoginForm from "../components/forms/users/login/LoginForm";
import Layout from "../components/layout/Layout";
const Login = (props) => (
  <Layout>
    <h1 className="ui header">
      Hello and welcome the online irish business hub
    </h1>
    <h2>Please log in</h2>
    <LoginForm />
  </Layout>
);

export default Login;

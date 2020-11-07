import React from "react";
import LoginForm from "../components/Forms/Users/Login/LoginForm";
import Layout from "../components/Layout/Layout";
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

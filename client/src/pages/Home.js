import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SearchForm from "../components/forms/search/SearchForm";
const Home = () => {
  return (
    <Layout>
      <div>Welcome User</div>
      <Link to="/login" style={{ marginRight: ".32rem" }}>
        Login
      </Link>
      <Link to="/register">Register</Link>
      <SearchForm />
    </Layout>
  );
};
export default Home;

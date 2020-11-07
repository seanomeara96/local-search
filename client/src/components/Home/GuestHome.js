import React from "react";
import LoginForm from "../Forms/Users/Login/LoginForm";
import PageSection from "../Layout/PageSection";
import Wrapper from "../Layout/Wrapper";
const GuestHome = (props) => {
  return (
    <PageSection>
      <Wrapper>
        <h1 className="ui header">
          Hello and welcome the online irish business hub
        </h1>
        <h2>Please log in</h2>
        <LoginForm />
      </Wrapper>
    </PageSection>
  );
};
export default GuestHome;

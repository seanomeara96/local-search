import React from "react";
import PageSection from "./PageSection";
import Wrapper from "./Wrapper";

const Layout = (props) => (
  <PageSection>
    <Wrapper>{props.children}</Wrapper>
  </PageSection>
);

export default Layout;

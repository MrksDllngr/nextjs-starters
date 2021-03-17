import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MainWrapper, Container } from "./LayoutComponents";
import Alert from "./Alert";

const Layout = ({ children, preview }) => {
  return (
    <MainWrapper>
      {preview ? <Alert /> : null}
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;

import React from "react";
import HeaderLoggedIn from "../components/layout/HeaderLoggedIn";
import Footer from "../components/layout/Footer";

const LayoutLoggedIn = ({ children }) => (
  <>
    <HeaderLoggedIn navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutLoggedIn;

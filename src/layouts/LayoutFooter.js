import React from "react";
import Footer from "../components/layout/Footer";
import BlankHeader from "../components/layout/BlankHeader";

const LayoutFooter = ({ children }) => (
  <>
    <BlankHeader />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutFooter;

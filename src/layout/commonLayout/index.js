import Footer from "@/components/Footer";

import Menu from "@/components/Menu";

import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {/* <PageTransition duration="0.8s" easing="cubic-bezier(0.25, 0.1, 0.25, 1)"> */}
      {children}
      {/* </PageTransition> */}
      <Footer />
    </>
  );
};

export default CommonLayout;

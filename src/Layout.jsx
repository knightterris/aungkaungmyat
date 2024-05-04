import React from "react";
import NavComponent from "./Nav.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <NavComponent />
      {children}
    </div>
  );
};

export default Layout;

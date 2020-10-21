
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/pageTwo" activeStyle={activeStyle} style={defaultStyle}>
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
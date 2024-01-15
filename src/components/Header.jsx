import React from "react";
import LOGO from "../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header id="header">
      <img src={LOGO} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;

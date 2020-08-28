import React from "react";
import classes from "./Logo.module.css";
import burgerlogo from "../../assets/images/logo.png"

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerlogo} alt={"Burger Logo"} />
  </div>
)

export default logo;
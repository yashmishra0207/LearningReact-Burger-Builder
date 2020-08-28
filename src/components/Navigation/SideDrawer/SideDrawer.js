import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Auxi from "../../../hoc/Auxi/Auxi";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.isOpen) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxi>
      <Backdrop show={props.isOpen} clicked={props.sideDrawerHandler}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxi>
  )
};

export default sideDrawer;
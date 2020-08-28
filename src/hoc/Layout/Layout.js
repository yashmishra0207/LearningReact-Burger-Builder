import React, { Component } from "react";

import Auxi from "../Auxi/Auxi";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return(
      <Auxi>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidebar isOpen={this.state.showSideDrawer} sideDrawerHandler={this.sideDrawerToggleHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxi>
    )
  }
}

export default Layout;
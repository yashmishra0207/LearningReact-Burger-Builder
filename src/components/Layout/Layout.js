import React from "react";

import Auxi from "../../hoc/Auxi";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Auxi>
    <div>
      toolbar, sidebar, backdrop
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Auxi>
)

export default layout;
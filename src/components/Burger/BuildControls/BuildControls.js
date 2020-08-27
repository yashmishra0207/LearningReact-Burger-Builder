import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Price is <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        add={() => props.operation(control.type, '+')}
        remove={() => props.operation(control.type, '-')}
        isDisabled={props.isDisabled[control.type]}
      />
      )
    )}
    <button
      className={classes.OrderButton}
      disabled={(Object.values(props.isDisabled).reduce((finalValue, ele) => (finalValue && ele), true))}
    >
      ORDER NOW
    </button>
  </div>
)

export default buildControls;
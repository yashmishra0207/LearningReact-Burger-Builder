import React,{ Component } from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[OrderSummary] ')
  }

  render() {
    return (
      <Auxi>
        <h3>Your Order</h3>
        <p>
          A delicious burger with the following ingredients:
        </p>
        <ul>
          {
            Object.keys(this.props.details.ingredients)
              .map((key) => <li key={key}><strong >{this.props.details.ingredients[key]}</strong>{" "}<span style={{textTransform: "capitalize"}}>{key}</span></li>)
          }
        </ul>
        <p>Your bill amount is <strong>${this.props.details.totalPrice.toFixed(2)}</strong></p>
        <p>
          Continue to Checkout?
        </p>
        <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
      </Auxi>
    )
  }
};

export default OrderSummary;
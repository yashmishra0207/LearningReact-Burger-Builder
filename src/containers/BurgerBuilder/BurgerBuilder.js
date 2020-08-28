import React, {Component} from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    isOpen: false
  }

  ingredientHandler = (type, operation) => {
    const oldCount = this.state.ingredients[type];
    let updatedCount;
    if(operation === '+')
      updatedCount = oldCount + 1;
    else if(operation === '-' && oldCount > 0)
      updatedCount = oldCount - 1;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    let updatedPrice;
    if(operation === '+')
      updatedPrice = oldPrice + priceAddition;
    else if(operation === '-' && oldCount > 0)
      updatedPrice = oldPrice - priceAddition;
    // this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    (oldCount || operation !== '-') && this.setState({
      totalPrice: updatedPrice,
      ingredients: {
        ...this.state.ingredients,
        [type]: updatedCount
      }
    })
  }

  openHandler = (isOpen) => {
    this.setState({isOpen: !isOpen})
  }

  purchaseHandler = () => {
    alert('you purchased a burger')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return(
      <Auxi>
        {/*Re-rendering of the modal and order summary component can
        be avoided by conditional rendering of modal component but
        that won't allow the slide-up/down animation of modal so
        shouldComponentUpdate is used inside of modal instead*/}
        <Modal show={this.state.isOpen} clicked={() => this.openHandler(this.state.isOpen)}>
          <OrderSummary
            details={this.state}
            cancel={() => this.openHandler(this.state.isOpen)}
            continue={this.purchaseHandler}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          operation={this.ingredientHandler}
          isDisabled={disabledInfo}
          openHandler={() => this.openHandler(this.state.isOpen)}
        />
      </Auxi>
    )
  }
}

export default BurgerBuilder;
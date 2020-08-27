import React, {Component} from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    totalPrice: 4
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

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return(
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          operation={this.ingredientHandler}
          isDisabled={disabledInfo}
        />
      </Auxi>
    )
  }
}

export default BurgerBuilder;
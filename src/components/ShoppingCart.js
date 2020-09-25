import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const cart = useContext(CartContext);

  const getCartTotal = () => {
    console.log("ShoppingCart cart", cart);

    return cart
      .reduce((acc, value) => {
        console.log("value", value);
        return acc + value.item.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

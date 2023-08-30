import React from "react";

import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  }
  const decrementItem = () => {
    dispatch(cartAction.removeFromCart(id));
  }
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;

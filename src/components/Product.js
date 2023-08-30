import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  function addItem() {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
};

export default Product;

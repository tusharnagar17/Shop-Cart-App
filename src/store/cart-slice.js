import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  // 4 things => addCart, removeCart, setShowCart,
  initialState: { itemList: [], showCart: false, totalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existing = state.itemList.find((item) => item.id === id);

      if (existing.quantity == 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existing.quantity--;
        existing.totalPrice = existing.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});



export const cartAction = cartSlice.actions;

export default cartSlice;

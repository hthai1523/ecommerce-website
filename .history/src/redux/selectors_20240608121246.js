import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;

const cartsRemainingSelector = createSelector(cartSelector, (cart) => {return });

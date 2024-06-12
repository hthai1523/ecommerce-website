import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;

export const cartsRemainingSelector = createSelector(cartSelector, (cart) => {return cart});

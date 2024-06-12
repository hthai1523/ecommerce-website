import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;
export const productListSelector = (state) => state.productList

export const cartsRemainingSelector = createSelector(cartSelector, (cart) => {return cart});
export const productListRemainingSelector = createSelector(productListSelector, (productList) => {return productList} )

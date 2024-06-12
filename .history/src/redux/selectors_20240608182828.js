import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;
export const productListSelector = (state) => state.productList

export const cartsRemainingSelector = createSelector(cartSelector, (cart) => {return cart});

export const allProductsSelector = createSelector(
  productListSelector,
  (productList) => productList.allProducts
);

export const filteredProductsSelector = createSelector(
  productListSelector,
  (productList) => productList.filteredProducts
);
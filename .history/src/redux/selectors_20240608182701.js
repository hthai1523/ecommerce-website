import { createSelector } from "@reduxjs/toolkit";

export const productListSelector = (state) => state.productList;

export const allProductsSelector = createSelector(
  productListSelector,
  (productList) => productList.allProducts
);

export const filteredProductsSelector = createSelector(
  productListSelector,
  (productList) => productList.filteredProducts
);

import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;
export const filterCategorySelector = (state) => state.filter.filterCategory;
export const sidebarSelector = (state) => state.isOpen;

export const cartsRemainingSelector = createSelector(cartSelector, (cart) => {
  return cart;
});
export const filterCategoryRemainingSelector = createSelector(
  filterCategorySelector,
  (filter) => {
    return filter;
  }
);

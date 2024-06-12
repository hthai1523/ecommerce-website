import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;
export const filterSelector = (state) => state.filter

export const cartsRemainingSelector = createSelector(cartSelector, (cart) => {return cart});
export const productListRemainingSelector = createSelector(filterSelector, (filter) => {
    if(filter) {
        
    }
} )

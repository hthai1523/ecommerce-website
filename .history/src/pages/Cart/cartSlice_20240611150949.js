import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingCart = state.find((item) => item.id === action.payload.id);
      if (existingCart) {
        existingCart.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
    plusQuantity: (state, action) => {
      const currentCart = state.find((item) => item.id === action.payload);
      if (currentCart) {
        currentCart.quantity += 1;
      }
    },
    minusQuantity: (state, action) => {
      const currentCart = state.find((item) => item.id === action.payload);
      if (currentCart) {
        if (currentCart.quantity > 1) {
          currentCart.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },

  },
});

export default cartSlice
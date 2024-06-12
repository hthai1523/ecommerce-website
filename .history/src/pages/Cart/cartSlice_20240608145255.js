import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      
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
            
        }
      }
    },
  },
});

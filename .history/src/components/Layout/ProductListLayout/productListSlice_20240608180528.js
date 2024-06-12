import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    setProductList: (state, action) => {
      return action.payload;  
    },
    addProduct: (state, action) => {
      state.push(action.payload); 
    }
  },
});

export const { setProductList, addProduct } = productListSlice.actions;
export default productListSlice.reducer;

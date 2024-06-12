import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
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


import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    setProductList: (state, action) => {
      state.push(action.payload) ;  
    },
    addProduct: (state, action) => {
      state.push(action.payload); 
    }
  },
});


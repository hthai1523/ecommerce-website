import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    addProductList: (state, action) => {
       return action.payload
    }

  },
});

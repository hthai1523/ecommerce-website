import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    addProductList: (state, action) => {
        state = action.payload
    }

  },
});

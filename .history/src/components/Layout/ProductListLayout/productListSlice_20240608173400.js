import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductList: (state, action) => {
        state.push(action.payload)
    }

  },
});

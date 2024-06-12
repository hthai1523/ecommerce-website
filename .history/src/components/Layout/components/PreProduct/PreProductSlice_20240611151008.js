import { createSlice } from "@reduxjs/toolkit";

const preProductSlice createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilterPreProduct: (state, action) => {
      state.filterPreProduct = action.payload;
    },
  },
});

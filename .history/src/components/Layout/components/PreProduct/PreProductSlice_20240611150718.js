import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilterPreProduct: (state, action) => {
      state.filterPreProduct = action.payload;
    },
  },
});

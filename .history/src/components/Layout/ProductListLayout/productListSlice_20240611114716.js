import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: '',
  filterPrice: []
};

export default createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
});



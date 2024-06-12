import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: '',
  filterPrice: []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
});


export default filterSlice
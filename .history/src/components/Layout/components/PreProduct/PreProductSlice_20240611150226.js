import { createSlice } from "@reduxjs/toolkit";



export default createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
});



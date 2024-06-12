import { createSlice } from "@reduxjs/toolkit";



export default createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
});



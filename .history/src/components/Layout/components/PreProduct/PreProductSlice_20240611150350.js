import { createSlice } from "@reduxjs/toolkit";



export default createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setFilterPre: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
});



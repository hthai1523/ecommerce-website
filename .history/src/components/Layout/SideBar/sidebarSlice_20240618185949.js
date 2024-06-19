import { createSlice } from "@reduxjs/toolkit";

const sidebarSlide = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state, action) => {
        state.isOpen = action.payload
    }, 
  }
    
});

export default sidebarSlide
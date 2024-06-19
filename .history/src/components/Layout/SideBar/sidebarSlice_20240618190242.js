import { createSlice } from "@reduxjs/toolkit";

const sidebarSlide = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state) => {
        state.isOpen = !state.isOpen
    }, 
  }
    
});

export default sidebarSlide
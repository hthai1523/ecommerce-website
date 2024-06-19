import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state, action) => {
        state.isOpen = action || !state.isOpen
    }, 
  }
    
});

export default sidebarSlice
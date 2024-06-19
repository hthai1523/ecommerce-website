import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state) => {
        state.isOpen = true
    }, 
    closeSidebar: (state) => {
        state.isOpen = false
    },
    
  }
    
});

export default sidebarSlice
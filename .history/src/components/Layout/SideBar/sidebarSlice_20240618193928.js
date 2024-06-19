import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
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

export default sidebarSlice
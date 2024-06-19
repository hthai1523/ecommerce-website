import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false
  },
  reducers: {
    openSidebar: (state) => {
        return !state.isOpen 
    }, 
    
  }
    
});

export default sidebarSlice
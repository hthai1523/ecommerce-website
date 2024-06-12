import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: '',
  filterPrice: []
};

const productListSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.filteredProducts = state.allProducts.filter((product) =>
        product.tags[0] === category
      );
    },
  },
});

export const { setProductList, filterByCategory } = productListSlice.actions;

export default productListSlice;

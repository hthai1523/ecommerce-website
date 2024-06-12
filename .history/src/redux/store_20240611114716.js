import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../pages/Cart/cartSlice'
import filterSlice from '../components/Layout/ProductListLayout/productListSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    productList: filterSlice.reducer
  },
})
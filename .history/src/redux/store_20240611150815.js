import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../pages/Cart/cartSlice'
import filterSlice from '../components/Layout/ProductListLayout/productListSlice';
import moduleName from '../../';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,

  },
})
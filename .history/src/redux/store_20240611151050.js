import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../pages/Cart/cartSlice'
import filterSlice from '../components/Layout/ProductListLayout/productListSlice';
import preProductSlice from '../components/Layout/components/PreProduct/PreProductSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,
    preProduct: preProductSlice.reducer
  },
})
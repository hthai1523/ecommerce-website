import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../pages/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
})
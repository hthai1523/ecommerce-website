import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state = state.filter(item => item.id!== action.payload);
        },
        plusQuantity: (state, action) => {
            const currentCart = state.find(item => item.id === action.payload)
            currentCart.quantity = currentCart.quantity + 1
        }
    }
})
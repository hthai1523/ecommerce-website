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
        }
    }
})
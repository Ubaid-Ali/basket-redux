import { createSlice } from '@reduxjs/toolkit';
import { product_Type } from '../../store/initial_state'

const INITIAL_BASKET: product_Type[] = []

// Slice
export const basket_Slice = createSlice({
    name: 'basket',
    initialState: INITIAL_BASKET,
    reducers: {

        addBasket: (state, action) => {
            let match = state.find((obj) => obj.id === action.payload.id)
            if (!match) {
                state.push(action.payload)
            }
        },

        removeBasket: (state, action) => state.filter((item) => item.id !== action.payload),
    },
});

// action 
export const { addBasket, removeBasket } = basket_Slice.actions;

// basket data
export const selectBasket = (state: { basket: product_Type[]; }) => state.basket;

// reducer
export default basket_Slice.reducer;
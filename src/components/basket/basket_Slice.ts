import { createSlice } from '@reduxjs/toolkit';
import { product_Type } from '../../store/initial_state'

const temporaryObj = {
    id: 'Black jacket',
    title: 'Black jacket',
    description: 'Black jacket for Men, Best choice for full winter collection',
    price: 125,
    imageURL: `https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Black-jacket.jpg?raw=true`,
    added: false
}

// Slice
export const basket_Slice = createSlice({
    name: 'basket',
    initialState: [temporaryObj],
    reducers: {

        addBasket: state => {
            state.push(temporaryObj)
        }
    },
});

// action 
export const { addBasket } = basket_Slice.actions;

// basket data
export const selectBasket = (state: { basket: product_Type[]; }) => state.basket;

// reducer
export default basket_Slice.reducer;
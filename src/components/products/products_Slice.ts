import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../store/initial_state'
import { product_Type } from '../../store/initial_state'

export const products_Slice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {

        // For Checkmark
        productAdded: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, added: true }
                }
                else { return item }
            })
        },
        // For Checkmark
        productRemove: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, added: false }
                }
                else { return item }
            })
        }
    },
});


// export actions
export const { productAdded, productRemove } = products_Slice.actions;


// for use useSelector((state) => state.counter.value)
export const selectProducts = (state: { products: product_Type[] }) => state.products;


// export reducer
export default products_Slice.reducer

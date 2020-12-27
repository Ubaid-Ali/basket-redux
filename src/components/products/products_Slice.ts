import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../store/initial_state'
import {product_Type} from '../../store/initial_state'

export const products_Slice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
    },
});


// export Changer no need 
// export const {} = products_Slice.actions;


// for use useSelector((state) => state.counter.value)
export const selectProducts = (state: { products: product_Type[] } ) => state.products;


export default products_Slice.reducer

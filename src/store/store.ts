import { configureStore } from '@reduxjs/toolkit';
import products from '../components/products/products_Slice';
import basket from '../components/basket/basket_Slice';

export default configureStore({
    reducer: {
        products,
        basket,
    }
});
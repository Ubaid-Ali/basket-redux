import { configureStore } from '@reduxjs/toolkit';
import products from '../components/products/products_Slice';


export default configureStore({
    reducer: {
        products,
    }
});
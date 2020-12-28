import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from './products_Slice';
import { product_Type } from '../../store/initial_state'

const Products = () => {


    const list = useSelector(selectProducts);

    console.log('list', list.map((pass: product_Type) => pass));


    return (
        <div>
            {list.map((product: product_Type) => {
                return (
                    <div key={product.title}>
                        {product.title}
                        <img src={product.imageURL} alt={product.title} />
                    </div>
                )
            })}
        </div>
    )
}

export default Products;

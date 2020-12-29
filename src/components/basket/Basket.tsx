import React from 'react'
import { useSelector } from 'react-redux'
import {selectBasket} from './basket_Slice';

const Basket = () => {
    const basket = useSelector(selectBasket);
    console.log('basket data:::', basket)
    return (
        <div>
            <h1>Basket Component</h1>
        </div>
    )
}

export default Basket;
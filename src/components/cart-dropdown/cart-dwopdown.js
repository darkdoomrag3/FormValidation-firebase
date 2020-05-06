import React from 'react'
import { ReactComponent as Bag } from '../../assest/bag.svg';
import './cart-dropdown.style.scss';


const CartDropDown = () => {
    return (
        <div className='cart-icon'>
            <div className=''>

                <Bag className='shopping-icon'>0</Bag>
            
                <span className='item-count'>0</span>
            </div>
        </div>
    )
}

export default CartDropDown;

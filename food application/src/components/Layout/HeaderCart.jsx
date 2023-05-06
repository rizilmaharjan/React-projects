import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useCartContext } from '../../Store/Cart-Context';

const HeaderCart = (props) => {
  const {items, totalAmount, addItem, removeItem} = useCartContext();
  const numberOfCartItems = items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0);

 
  return (
    <>
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>

        </button>
      
    </>
  )
}

export default HeaderCart

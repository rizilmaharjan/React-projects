import React from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import { useCartContext } from "../../Store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useCartContext();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {


  };
  const cartItems = cartCtx.items.map((item) => {
    return (
      <ul className={classes["cart-items"]}>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      </ul>
    );
  });
  return (
    <>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
};

export default Cart;

import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';

const Cartcontext = createContext();

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) =>{
    switch(action.type){
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const existingCartItemIndex = state.items.findIndex((item)=>item.id===action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if(existingCartItem){
                const updatedItem={
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{
              
                updatedItems = state.items.concat(action.item);
            }
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
       
        default:
            return state
    }
    return defaultCartState

}

const CartContext = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item)=>{
        dispatchCartAction({type:'ADD', item: item})

    }
    const removeItemFromCartHandler = (id)=>{
        dispatchCartAction({type:'REMOVE', id: id})
    }

    const cartFeatures = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem:removeItemFromCartHandler

    }

  return (
    <>
      <Cartcontext.Provider value={cartFeatures}>
        {children}
      </Cartcontext.Provider>
    </>
  )
}

// global context hook
const useCartContext = ()=>{
    return useContext(Cartcontext)
}

export{CartContext, useCartContext}

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocarCartData = ()=>{
    let newCartData = localStorage.getItem("YourCart");
    if(newCartData === []){
        return [];
    }else{
        return JSON.parse(newCartData)
    }

}
const initialState = {
    // cart:[],
    cart: getLocarCartData(),
    total_item:"",
    total_amount: "",
    shipping_fee: 50000
};

const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const addToCart = (id, color, amount, product) =>{
        dispatch({type:"ADD_TO_CART", payload: {id,color,amount,product}})
    }

    // increment and decrement
    const setDecrease = (id)=>{
        dispatch({type:"SET_DECREMENT", payload: id})

    }
    const setIncrease = (id)=>{
        dispatch({type:"SET_INCREMENT", payload: id})

    }


    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM", payload: id})

    }

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    // to add data in local storage
    // get vs set
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("YourCart", JSON.stringify(state.cart))
    },[state.cart])
    return <CartContext.Provider value={{...state,addToCart, removeItem, clearCart, setIncrease, setDecrease}}>
        {children}
    </CartContext.Provider>

}

// global context hook
const useCartContext = ()=>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext}
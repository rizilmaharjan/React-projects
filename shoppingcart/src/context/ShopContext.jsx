import { createContext, useContext, useState } from "react"
import { Products } from "../Products";

const shopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1; i<Products.length+1; i++){
        cart[i] = 0
    }
    return cart
}
export default function ShopContext({children}) {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = Products.find((product)=>product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (id)=>{
        setCartItems(prev=>({
            ...prev,
            [id]: prev[id] + 1
        }))

    }

    const removeFromCart = (id)=>{
        setCartItems(prev=>({
            ...prev,
            [id]: prev[id] - 1
        }))
    }

    const updateCartItemCount = (val, id)=>{
        setCartItems(prev=>({
            ...prev,
            [id]: val
        }))
    }

   
  return (
    <shopContext.Provider value={{cartItems, addToCart,getTotalCartAmount, removeFromCart, updateCartItemCount}}>
        {children}
      
    </shopContext.Provider>
  )
}
export const useShopContext = ()=>{
    return useContext(shopContext)
  }

 
  

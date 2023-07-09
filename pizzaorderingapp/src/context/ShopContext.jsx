import { createContext, useContext, useState } from "react"
import { pizzaData } from "../data/pizzaData"

const shopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1; i<pizzaData.length+1;i++){
        cart[i] = 0
    }
    return cart
}
export const ShopContext = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [selectedSize, setSelectedSize] = useState("small")



    // add to cart functionality
    const addToCart = (id)=>{
        setCartItems((prev)=>({
            ...prev,
            [id]:prev[id]+1
          

        }))
    }
    // remove from cart functionality
    const removeFromCart = (id)=>{
        setCartItems((prev)=>({
            ...prev,
            [id]:prev[id]-1
        }))
    }

    // updateCartItemCount
    const updateCartItemCount = (val, id)=>{
        setCartItems((prev)=>({
            ...prev,
            [id]:prev[id] + val
        }))
    }

    // pizzaSize
    // const pizzaSize = (size)=>{

    // }

  return (
   
    <>
        <shopContext.Provider value={{addToCart, selectedSize, setSelectedSize, removeFromCart, cartItems, updateCartItemCount}}>
            {children}

        </shopContext.Provider>

    </>
  )
}

export const useShopContext = ()=>{
    return useContext(shopContext)
}

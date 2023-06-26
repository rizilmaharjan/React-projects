import { createContext } from "react"
import { Products } from "../Products";

const shopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=1; i<Products.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}
export default function ShopContext({children}) {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]: prev[itemId] + 1
        }))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId] - 1
        }))
    }
  return (
    <shopContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {children}
      
    </shopContext.Provider>
  )
}
export const useShopContext = ()=>{
    return useContext(shopContext)
  }

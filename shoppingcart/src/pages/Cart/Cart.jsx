import { Products } from "../../Products";
import CartItem from "../../components/CartItem";
import { useShopContext } from "../../context/ShopContext";

export default function Cart() {
  const {cartItems} = useShopContext();
  return (
    <>
     <div className="py-10">
      <div className="my-3 text-center">
        <h1 className="font-bold text-4xl">Your Cart Items</h1>
      </div>
      <div>
        {Products.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
     </div>
    </>
  )
}

import { Products } from "../../Products";
import CartItem from "../../components/CartItem";
import { useShopContext } from "../../context/ShopContext";

import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useShopContext();
  const navigate = useNavigate()
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <div className="py-10">
        <div className="my-3 text-center">
          <h1 className="font-bold text-4xl">Your Cart Items</h1>
        </div>
        <div>
          {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {
          totalAmount > 0 ? (
            <div className="flex flex-col justify-center items-center my-4">
        
            <p className="text-2xl font-semibold">SubTotal:${totalAmount} </p>
            <div className="flex gap-x-5 my-4">
              <button onClick={()=>navigate("/")} className="bg-black text-white font-semibold py-2 px-3 rounded-xl">Continue Shopping</button>
              <button className="bg-black text-white font-semibold py-2 px-3 rounded-xl">Checkout</button>
            </div>
          </div>


          ): <h1 className="text-center mt-14 text-2xl font-semibold">Your Cart is Empty</h1>
        }
       
      </div>
    </>
  );
}

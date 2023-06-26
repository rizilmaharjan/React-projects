import { useShopContext } from "../context/ShopContext";
export default function CartItem({ data }) {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount } = useShopContext()
    const {id, productImage, productName, price} = data
  return (
    <>
      <div className="mt-4 flex justify-center">
        <div className="flex items-center justify-around bg-white drop-shadow-xl rounded-xl py-4 w-1/3">
          <img src={productImage} width={140} alt="items" />
          <div>
            <p>
              <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input className="border-2 w-14 text-center" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}  />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

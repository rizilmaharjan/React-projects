import { useShopContext } from "../../context/ShopContext";

export default function Product({data}) {
    const {addToCart, cartItems} = useShopContext();
    const cartItemAmount = cartItems[data.id]
  return (
    <>
      <div key={data.id}>
        <div>
          <img src={data.productImage} width={200} alt="products" />
        </div>
        <div className="text-center">{data.productName}</div>
        <div className="text-center font-semibold">${data.price}</div>
        <div className="text-center">
        <button onClick={()=>addToCart(data.id)} className="border-2 rounded-full px-2 py-1 border-black hover:bg-black hover:text-white hover:ease-in-out hover:duration-300">Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>

        </div>
      </div>
    </>
  );
}

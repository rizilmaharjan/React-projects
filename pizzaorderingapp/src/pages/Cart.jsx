import { useShopContext } from "../context/ShopContext";
import { pizzaData } from "../data/pizzaData";
export const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useShopContext();
  return (
    <>
      <div className="mt-10 w-11/12 flex flex-wrap flex-col md:flex-row items-center justify-around">
        <div>
          <table>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>

            {pizzaData.map((item) => {
              if (cartItems[item.id] !== 0) {
                return (
                  
                    <tr>
                      <td className="px-8 md:px-14">
                        <div className="w-14 md:w-20">
                          <img width={60} src={item.image} alt={item.name} />
                        </div>
                      </td>
                      <td className=" px-12">{item.name}</td>
                      <td className=" px-12">Double Ingredient, spicy sauce</td>
                      <td className=" px-12">{item.price}</td>
                      <td className=" px-12"><button className="text-2xl text-gray-400" onClick={()=>removeFromCart(item.id)}>-</button > <span className="px-2">{cartItems[item.id]}</span> <button onClick={()=>addToCart(item.id)} className="text-xl text-gray-400">+</button></td>
                      <td className=" px-12">$50</td>
                    </tr>
                  
                );
              }
            })}
          </table>
        </div>
        <div className="bg-gray-700 w-[20rem] flex flex-col mt-10 pl-14 py-8 text-white">
          <h1 className="uppercase font-bold mb-4">cart total</h1>
          <p>
            <span className="font-bold"> Subtotal:</span> $79.60
          </p>
          <p>
            <span className="font-bold"> Discount:</span> $0.00
          </p>
          <p>
            <span className="font-bold"> Total:</span> $79.60
          </p>
          <button className="uppercase font-semibold bg-white text-orange-600 w-48 py-1 mt-6">
            checkout now!
          </button>
        </div>
      </div>
    </>
  );
};

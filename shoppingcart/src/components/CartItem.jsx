import { useShopContext } from "../context/ShopContext";
export default function CartItem({ data }) {
    const {CartItems} = useShopContext()
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
                <button>-</button>
                <input value={CartItems[id]} />
                <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

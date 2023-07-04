export const Cart = () => {
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
                    <tr>
                        <td className="px-8 md:px-14">
                            <div className="w-14 md:w-20">
                                <img src="/images/pizza.png" alt="pizza" />
                            </div>
                        </td>
                        <td className=" px-3">
                           coralzo
                        </td>
                        <td className=" px-3">
                           Double Ingredient, spicy sauce
                        </td>
                        <td className=" px-3">
                           $25
                        </td>
                        <td className=" px-3">
                           2
                        </td>
                        <td className=" px-3">
                            $50
                        </td>
                    </tr>
                </table>
            </div>
            <div className="bg-gray-700 w-[20rem] flex flex-col mt-10 pl-14 py-8 text-white">
                <h1 className="uppercase font-bold mb-4">cart total</h1>
                <p><span className="font-bold"> Subtotal:</span> $79.60</p>
                <p><span className="font-bold"> Discount:</span> $0.00</p>
                <p><span className="font-bold"> Total:</span> $79.60</p>
                <button className="uppercase font-semibold bg-white text-orange-600 w-48 py-1 mt-6">checkout now!</button>
            </div>
        </div>

    </>
  )
}

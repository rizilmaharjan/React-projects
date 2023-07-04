import { GiFullPizza } from "react-icons/gi";
import { useState } from "react";
export const Product = () => {
  const [pizzaPrice, setPizzaPrice] = useState(14);
  const handleClick = (size) => {
    if (size === "s") return setPizzaPrice(14);
    if (size === "m") return setPizzaPrice(20);
    if (size === "l") return setPizzaPrice(25);
  };
  return (
    <>
      <div className="flex justify-center gap-10 flex-wrap mt-8">
        <div>
          <img src="/images/pizza.png" alt="pizza" />
        </div>
        <div className="w-1/2">
          <div>
            <h1 className="uppercase mt-10 font-bold text-4xl">campagnola</h1>
            <p className="mt-10 text-2xl text-red-600 font-semibold">
              <u>${pizzaPrice}</u>
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sit aperiam iure tempore, fuga numquam repellendus ea obcaecati
              odio quibusdam perspiciatis eius dicta?
            </p>
            <h2 className="font-bold mt-8 text-lg">Choose the size</h2>
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div className="relative" onClick={() => handleClick("s")}>
              <GiFullPizza size={30} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Small
              </span>
            </div>
            <div className="relative" onClick={() => handleClick("m")}>
              <GiFullPizza size={40} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Medium
              </span>
            </div>
            <div className="relative" onClick={() => handleClick("l")}>
              <GiFullPizza size={50} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Large
              </span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg py-3">
              Choose additional ingredients
            </h1>
            <div className="flex gap-3">
              <div>
                <input type="checkbox" />
                <label>Double ingredients</label>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <label>Extra Cheese</label>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <label>Spicy Sauce</label>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <label>Garlic Sauce</label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <input className="border border-black w-14 px-2 py-1 outline-none" type="number" />
            <button className="ml-2 bg-orange-700 text-white px-2 py-1 font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

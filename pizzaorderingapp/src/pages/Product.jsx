import { GiFullPizza } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pizzaData } from "../data/pizzaData";
export const Product = () => {
  const [pizzaPrice, setPizzaPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState("small")
  const {id} = useParams();
  const filteredPizza = pizzaData.find(item=>item.id === Number(id))
  useEffect(()=>{
    setPizzaPrice(filteredPizza.price)

  },[])
  const handleClick = (size) => {
    setSelectedSize(size)
    if(size === "small") return setPizzaPrice(filteredPizza.price)
    if (size === "medium") return setPizzaPrice((filteredPizza.price*2).toFixed(2));
    if (size === "large") return setPizzaPrice((filteredPizza.price*3).toFixed(2));
  };


  
  return (
    <>
      <div className="flex justify-center items-start flex-col md:flex-row md:gap-20 mt-5 md:mt-8 px-5">
        <div className="w-1/3">
          <img src={filteredPizza.image} className="w-full" alt="pizza" />
        </div>
        <div className="md:w-1/2">
          <div>
            <h1 className="uppercase mt-5 md:mt-10 font-bold text-xl md:text-4xl">{filteredPizza.name}</h1>
            <p className="mt-2 md:mt-10 text-2xl text-red-600 font-semibold">
              <u>${pizzaPrice}</u> <span className="font-semibold text-lg">({selectedSize})</span>
            </p>
            <p className="mt-3 text-justify">
             {
              filteredPizza.para
             }
            </p>
            <h2 className="font-bold mt-8 text-2xl md:text-lg">Choose the size</h2>
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div className="relative" onClick={() => handleClick("small")}>
              <GiFullPizza size={30} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Small
              </span>
            </div>
            <div className="relative" onClick={() => handleClick("medium")}>
              <GiFullPizza size={40} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Medium
              </span>
            </div>
            <div className="relative" onClick={() => handleClick("large")}>
              <GiFullPizza size={50} />
              <span className="absolute top-[-3px] left-4 bg-blue-400 text-white text-xs rounded-lg px-1">
                Large
              </span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-md md:text-lg py-5">
              Choose additional ingredients
            </h1>
            <div className="flex flex-col md:flex-row gap-3">
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

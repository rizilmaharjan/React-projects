import { formatCurrency } from "../utilities/formatCurrency";
import { UilPlus } from '@iconscout/react-unicons'
export const StoreItem = ({ id, name, price, imgUrl }) => {
  const quantity = 0;
  return (
    <>
      <div className="bg-white drop-shadow-lg pb-6">
        <div className=" bg-yellow-400 rounded-lg h-80 w-full">
          <img
            src={imgUrl}
            alt="images"
            className="object-cover rounded-lg h-full w-full"
          />
        </div>
        <div className="flex justify-between mx-4 my-6">
          <span className="font-bold">{name}</span>
          <span className="text-[#908E9B]">{formatCurrency(price)}</span>
        </div>

        {
            quantity === 0 ? (
                <div className="flex justify-center">
                    <button className="flex items-center justify-evenly bg-[#006AFF] text-white rounded-lg py-2  w-40">{<UilPlus color="white"/>} <span>Add To Cart</span> </button>
                </div>
               
            ): (

                <div className="flex justify-center gap-x-5">
            
                <button className="bg-[#006AFF] py-1 px-3 rounded-md text-white font-bold text-xl">
                  -
                </button>
                <p>
                  <span className="font-semi-bold text-2xl"> 1</span> <span>in Cart</span>{" "}
                </p>
                <button className="bg-[#006AFF] py-1 px-3 rounded-md text-white font-bold text-xl">
                  +
                </button>
              </div>
            )


        }
        
        <div className="flex justify-center mt-8">
            <button className="bg-red-600 text-white px-2 py-1 rounded-lg">Remove</button>
        </div>
      </div>
    </>
  );
};

import { Header } from "../components/Header";
import { BiSolidMap } from "react-icons/bi";
import { HotelData } from "../datas/HotelsPic";
import { Mail } from "../components/Mail";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";


import { useState } from "react";

export const Hotel = () => {
  const [slideNumber,setSlideNumber] = useState(0)
  const [open,setOpen] = useState(false)
  const handleOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)

  }

  const handleMove = (direction)=>{
    let newSlideNum;
    if(direction === "l"){
      newSlideNum = slideNumber === 0 ? HotelData.length - 1 : slideNumber - 1; 
    }else{
      newSlideNum = slideNumber === HotelData.length - 1 ? 0 : slideNumber + 1; 


    }
    setSlideNumber(newSlideNum)

  }
  return (
    <>
      <Header type={"list"} />
      <div className="mx-auto pt-4">
        {
          open && (
            <div className="sticky left-0 mt-[-1rem] top-0 w-[100%] h-screen bg-[rgba(0,0,0,0.426)] z-[999] flex items-center">
              <MdOutlineCancel onClick={()=>setOpen(false)} className="absolute right-20 top-2" size={40} color="lightGray" />
            <AiOutlineLeft onClick={()=>handleMove("l")} color="lightGray" size={40} />
            <div className="w-full h-full flex items-center justify-center">
              <img className=" h-[80vh] w-[80%] object-cover" src={HotelData[slideNumber].image} alt="image" />
            </div>
            <AiOutlineRight onClick={()=>handleMove("r")} color="lightGray" size={40} />
          </div>
          


          )
        }
        <div>
          <h1 className="font-bold text-2xl">Grand Hotel</h1>
          <p className="text-sm py-2 flex items-center gap-2">
            <BiSolidMap />
            St 125 New york
          </p>
          <h2 className="text-blue-700 font-semibold">
            Excellent location - 500m from center
          </h2>
          <p className="font-semibold pt-2 text-green-800">
            Book a stay over $114 at this property and get a free airport taxi
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {HotelData.map((item,i) => {
            return (
              <div className="w-[25rem]" key={item.id}>
                <img
                  onClick={()=>handleOpen(i)}
                  className="h-full"
                  src={item.image}
                  alt="hotels"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex gap-5">
          <div className="w-11/12 px-4">
            <h1 className="font-bold text-2xl">Stay in the heart of Krakow</h1>
            <p className="text-justify mt-3 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              doloremque optio adipisci libero! Placeat fugit ullam dolores a.
              Tempora, autem tenetur assumenda animi porro accusantium
              blanditiis? Sapiente itaque officia tenetur Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Commodi asperiores sequi a
              omnis soluta, totam similique, ab quibusdam voluptatum labore
              tenetur blanditiis recusandae adipisci doloremque explicabo.
              Minima non dolorem voluptate nesciunt ex? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sapiente amet molestiae soluta
              exercitationem deserunt id impedit nihil eum reiciendis, quibusdam
              sequi explicabo nobis tempora nostrum. Aliquam dolorem veniam odio
              doloribus non quisquam harum repellat perferendis corrupti?
              Aliquam quisquam enim maxime deleniti minus. Dicta, laborum quis.{" "}
            </p>
          </div>
          <div className="bg-sky-200 px-3 py-2">
          <h1 className="font-bold text-2xl">Perfect for a 9-night stay!</h1>
          <p className="mt-4">
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <h1 className="mt-3"><span className="font-bold text-xl">$945 </span>(9 nights)</h1>
          <button className="mt-4 px-2 py-1 rounded-md bg-blue-500">Reserve or Book Now!</button>
        </div>
        </div>
       
      </div>
      <Mail />
    </>
  );
};

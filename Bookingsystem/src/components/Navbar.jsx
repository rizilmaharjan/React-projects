import { FaBed } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import {
  BsFillTaxiFrontFill,
  BsFillCalendarDateFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
export const Navbar = () => {
    const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <header className="bg-blue-900 pb-20">
        <nav className="w-2/3 mx-auto relative">
          <div className="flex justify-between items-center pt-4">
            <div>
              <h1 className="text-white text-xl font-semibold">Iamabooking</h1>
            </div>
            <div>
              <button className="bg-white shadow-2xl mx-2 text-black px-5 py-1">
                Register
              </button>
              <button className="bg-white shadow-2xl mx-2 text-black px-5 py-1">
                Login
              </button>
            </div>
          </div>
          <div className="flex gap-10 pt-6">
            <div className="flex items-center">
              <FaBed size={25} color="white" />
              <span className="text-white text-sm ml-3">Stays</span>
            </div>
            <div className="flex items-center">
              <IoIosAirplane size={25} color="white" />
              <span className="text-white text-sm ml-3">Flights</span>
            </div>
            <div className="flex items-center">
              <AiFillCar size={25} color="white" />
              <span className="text-white text-sm ml-3">Car rentals</span>
            </div>
            <div className="flex items-center">
              <FaBed size={25} color="white" />
              <span className="text-white text-sm ml-3">Attractions</span>
            </div>
            <div className="flex items-center">
              <BsFillTaxiFrontFill size={25} color="white" />
              <span className="text-white text-sm ml-3">Airport taxis</span>
            </div>
          </div>
          <div className="text-white mt-10">
            <h1 className="text-2xl font-bold mb-4">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="mb-3">
              Get rewarded for your travels-unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="bg-sky-600 text-white px-3 py-1">
              Sign in/Register
            </button>
          </div>

          <div className="flex justify-around items-center border-2 border-yellow-400 rounded-md py-2 px-3 w-full text-black bg-white absolute bottom-[-6.6rem]">
            <div className="flex items-center gap-2">
              <FaBed color="lightGray" />
              <input
                className="outline-none"
                type="text"
                placeholder="Where are you going?"
              />
            </div>
            <div className="flex items-center gap-2">
              <BsFillCalendarDateFill  color="lightGray" />
              <span onClick={()=>setOpenDate(!openDate)} className="text-gray-400">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {
                openDate && (
                    <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-[50px]"
              />

                )
              }
              
            </div>
            <div className="flex items-center gap-2">
              <BsFillPersonFill color="lightGray" />
              <span className="text-gray-400">2 adults 2 children 1 room</span>
            </div>
            <div>
              <button className="bg-sky-600 text-white px-3 py-1">
                Search
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

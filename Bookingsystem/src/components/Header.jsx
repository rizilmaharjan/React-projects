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
import { useNavigate } from "react-router-dom";
export const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate()

  const handleOptions = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = ()=>{
    navigate("/hotels", {state: {destination,date,options}})

  }

  return (
    <>
      <header className={`bg-blue-900 ${type === "list" ? "pb-8" : "pb-20"} `}>
        <div className="md:w-2/3 md:mx-auto relative px-2">
          <div className="flex md:gap-10 pt-6">
            <div className="flex items-center">
              <FaBed className="text-xl md:text-3xl" color="white" />
              <span className="text-white text-sm ml-3">Stays</span>
            </div>
            <div className="flex items-center">
              <IoIosAirplane className="text-xl md:text-3xl" color="white" />
              <span className="text-white text-sm ml-3">Flights</span>
            </div>
            <div className="flex items-center">
              <AiFillCar className="text-xl md:text-3xl" color="white" />
              <span className="text-white text-sm ml-3">Car rentals</span>
            </div>
            <div className="flex items-center">
              <FaBed className="text-xl md:text-3xl" color="white" />
              <span className="text-white text-sm ml-3">Attractions</span>
            </div>
            <div className="flex items-center">
              <BsFillTaxiFrontFill className="text-xl md:text-3xl" color="white" />
              <span className="text-white text-sm ml-3">Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <div>
              <div className="text-white mt-10">
                <h1 className="text-lg font-semibold md:text-2xl md:font-bold mb-4">
                  A lifetime of discounts? It's Genius.
                </h1>
                <p className="text-sm md:text-md mb-3">
                  Get rewarded for your travels-unlock instant savings of 10% or
                  more with a free Lamabooking account
                </p>
                <button className="bg-sky-600 text-white px-3 py-1">
                  Sign in/Register
                </button>
              </div>

              <div className="flex justify-around items-center border-2 border-yellow-400 rounded-md py-2 px-3 ml-[-0.5rem] w-full text-black bg-white absolute bottom-[-8rem] md:bottom-[-6.6rem]">
                <div className="flex items-center gap-2">
                  <FaBed color="lightGray" />
                  <input
                    className="outline-none w-36 text-sm md:text-lg md:w-auto"
                    type="text"
                    placeholder="Where are you going?"
                    onChange={e=>setDestination(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <BsFillCalendarDateFill color="lightGray" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="text-gray-400 text-xs w-40 md:text-lg md:w-auto"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )} `}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="absolute top-[50px] z-[20]"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <BsFillPersonFill color="lightGray" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="text-gray-400 text-xs md:text-lg"
                  >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                  {openOptions && (
                    <div className="absolute z-[20] top-[50px] bg-white shadow-xl w-52 px-4 py-6  text-gray-400 rounded-md">
                      <div className="flex items-center justify-between my-2">
                        <span>Adult</span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={options.adult <= 1}
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("adult", "d")}
                          >
                            -
                          </button>
                          <span>{options.adult}</span>
                          <button
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between my-2">
                        <span>Children</span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={options.children <= 0}
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("children", "d")}
                          >
                            -
                          </button>
                          <span>{options.children}</span>
                          <button
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Room</span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={options.room <= 1}
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("room", "d")}
                          >
                            -
                          </button>
                          <span>{options.room}</span>
                          <button
                            className="border border-black px-3 py-1"
                            onClick={() => handleOptions("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button onClick={handleSearch} className="bg-sky-600 text-white px-3 py-1">
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

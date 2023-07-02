import { useLocation, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from "react";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import { SearchItem } from "../components/SearchItem";
export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <>
      <Header type={"list"} />
      <div className="flex justify-evenly">
        <div className="bg-[#febb02] px-3 pt-3 pb-2 rounded-lg sticky top-10 w-72">
          <h1 className="font-bold text-2xl text-gray-600">Search</h1>
          <div className="mt-3 mb-2">
            <p className="text-sm">Destination</p>
            <input
              className="py-1 w-full px-2"
              type="text"
              placeholder={destination}
            />
          </div>
          <div className="mb-2">
            <p className="text-sm">Check-in-date</p>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Options</p>
            <div className="flex justify-between pl-1.5 ">
              <p className="text-xs">Min Price(per night)</p>
              <input
                className="border outline-none text-center border-black w-10"
                type="text"
              />
            </div>

            <div className="flex justify-between pl-1.5 my-2">
              <p className="text-xs">Max Price(per night)</p>
              <input
                className="border outline-none text-center border-black w-10"
                type="text"
              />
            </div>

            <div className="flex justify-between pl-1.5 my-2">
              <p className="text-xs">Adult</p>
              <input
                className="border outline-none text-center border-black w-10"
                type="number"
                placeholder={options.adult}
                min={1}

              />
            </div>

            <div className="flex justify-between pl-1.5 my-2">
              <p className="text-xs">Children</p>
              <input
                className="border outline-none text-center border-black w-10"
                type="number"
                placeholder={options.children}
                min={0}
              />
            </div>

            <div className="flex justify-between pl-1.5">
              <p className="text-xs">Room</p>
              <input
                className="border outline-none text-center border-black w-10"
                type="number"
                min={1}
                placeholder={options.room}
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-blue-600 text-sm py-1 text-white font-semibold w-full">
              Search
            </button>
          </div>
        </div>
        <div>
          <SearchItem />

        </div>
      </div>
    </>
  );
};

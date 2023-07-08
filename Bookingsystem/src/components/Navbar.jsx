import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
export const Navbar = () => {
  const [openDate, setOpenDate] = useState(false);
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

  const handleOptions = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  return (
    <>
      <div className="bg-blue-900 py-4">
        <nav className="w-2/3 mx-auto">
          <div className="flex justify-between items-center">
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
        </nav>
      </div>
    </>
  );
};

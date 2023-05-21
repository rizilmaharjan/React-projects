import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
 const [nav, setNav] = useState(false)
 const [search, setSearch] = useState(false)
  return (
    <>
      <nav className="bg-black text-white flex justify-between px-4 py-6 md:justify-around lg:justify-around relative">
        <div className="flex items-center">
            <h1 className="capitalize text-2xl font-bold">abstract</h1>
            <span className="text-2xl px-4">|</span>
            <h1 className="capitalize text-2xl font-bold">help center</h1>
        </div>
        {
          search ? (
           <div className="absolute w-full top-0 left-0 right-0 bottom-0 bg-white flex justify-evenly items-center ease-in-out duration-300 lg:hidden">
            <div className="w-96">
            <input className="border text-black border-black py-3 w-full px-4 rounded-lg" type="text" placeholder="Search" />

            </div>
            <div>
            <RxCross1 onClick={()=>setSearch(!search)} className="text-black text-3xl" />

            </div>

           </div>

          ):(
            <div className="absolute w-full top-0 left-[-200%] right-0 bottom-0 bg-white flex justify-evenly items-center ease-in-out duration-300">

            </div>
           

          )
        }
         <div className="flex items-center gap-x-2 lg:hidden">
            <AiOutlineSearch onClick={()=>setSearch(!search)} className="text-white text-3xl" />
            {
              nav ?  <RxCross1 onClick={()=>setNav(!nav)} className="cursor-pointer text-white text-3xl" />:
              <GiHamburgerMenu onClick={()=>setNav(!nav)} className="cursor-pointer text-white text-3xl" />
            }

        </div>
       
        <div className="hidden lg:block">
         <button className="border border-white py-3 px-12 rounded-md font-semibold text-xl bg-gray-800">Submit a request</button>
         <button className="border border-black bg-purple-600 py-3 px-10 rounded-md font-semibold text-xl ml-7 hover:bg-white hover:text-black hover:ease-in-out duration-300">Sign in</button>
        </div>

        {/* for mobile devices */}

        {
          nav ? (
            <div className="absolute z-10 gap-y-5 flex flex-col items-center py-14 top-20 left-0 w-full bg-black ease-in-out duration-300">
            <h1 className="text-2xl">Submit a request</h1>
            <hr className="w-1/2" />
            <h1 className="text-2xl">Sign in</h1>
          </div>

          ):(
            <div className="absolute z-10 gap-y-5 flex flex-col items-center py-14 top-20 left-[-200%] w-full bg-black ease-in-out duration-300">
            <h1 className="text-2xl">Submit a request</h1>
            <hr className="w-1/2" />
            <h1 className="text-2xl">Sign in</h1>
          </div>

          )
        }
       



      </nav>
    </>
  )
}

export default Navbar

import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-start items-center bg-white shadow-lg py-4">
        <div className="logo">
            <h1 className="text-black font-bold text-3xl pl-28">Workout Buddy</h1>
        </div>
        {/* <ul className="flex pr-20">
            <NavLink to="/" className="px-5 bg-red-700 mx-3"><li>Home</li></NavLink>
            <NavLink to="/about" className="px-5 bg-red-700 mx-3"><li>About</li></NavLink>
            <NavLink to="#" className="px-5 bg-red-700 mx-3"><li>Services</li></NavLink>
            <NavLink to="#" className="px-5 bg-red-700 mx-3"><li>Contact</li></NavLink>
            
        </ul> */}
      </nav>
    </>
  )
}

export default Navbar

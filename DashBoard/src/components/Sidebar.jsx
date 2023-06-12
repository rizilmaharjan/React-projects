
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center py-4 border-r border-black h-screen w-1/5 ">
        <div className="flex justify-center">
            <span className="text-purple-600 font-semibold text-2xl">Admin</span>
        </div>
        <hr className="border-black w-full my-4" />
        <div className="w-full">
            <ul className="pl-5">
                <li> <span>Dashboard</span> </li>
                <li> <span>Dashboard</span> </li>
                <li> <span>Dashboard</span> </li>
                <li> <span>Dashboard</span> </li>
            </ul>
        </div>
        <div>Color options</div>
      </div>
    </>
  )
}

export default Sidebar

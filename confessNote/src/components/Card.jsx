import { RxCross1 } from "react-icons/rx";

const Card = ({date, notes, del, id}) => {
  return (
    <>
      <div className="border-2 border-purple-900 w-60 h-64 overflow-x-auto rounded-lg px-8 py-4 ">
        <div className="flex justify-between items-center">
        <h1 className="text-center font-bold">{date}</h1>
        <RxCross1 onClick={()=>del(id)} className="text-xl hover:scale-150 hover:text-red-600 hover:ease-in hover:duration-300 cursor-pointer " />

        </div>
        <p className="py-2">{notes}</p>
      </div>
    </>
  )
}

export default Card



const Card = ({img, title, para}) => {
  return (
    <>
      <div className="bg-white drop-shadow-xl w-4/6 mx-auto my-3 px-7 py-4 rounded-2xl md:w-11/12">
        <div className="w-1/2 flex justify-around items-center gap-3">
           <span className="text-3xl">{img}</span>
           <h1 className="font-bold text-2xl text-center py-3">{title}</h1>
           
        </div>
        <div>
            <p className="text-gray-500 text-md">{para}</p>
        </div>
      </div>
    </>
  )
}

export default Card


const BMIReduceBlock = ({img,title,para}) => {
  return (
    <>
        <div className="px-6 my-24">
            <div className="w-24 h-14">
               {img}
            </div>
            <div className="py-6">
               <h1 className="text-2xl font-bold">{title}</h1> 
            </div>
            <div>
               <p className="text-lg text-gray-700 font-semibold">{para}</p> 
            </div>
        </div>
      
    </>
  )
}

export default BMIReduceBlock

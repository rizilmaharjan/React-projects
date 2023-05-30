
const ResetButton = ({resetBoard}) => {
  return (
    <>
        <div className="flex justify-center my-10">
            <button className="border py-2 px-5 rounded-lg bg-blue-600 font-bold text-white text-xl" onClick={resetBoard}>Reset</button>
        </div>
      
    </>
  )
}

export default ResetButton

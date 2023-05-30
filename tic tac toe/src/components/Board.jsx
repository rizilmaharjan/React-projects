import Box from "./Box"
const Board = ({board, onClick}) => {
  return (
    <>
    <div className="grid grid-cols-3 grid-rows-3 w-4/12 py-6 gap-y-8 px-4 place-items-center mx-auto">
        {
            board.map((value,idx)=>{
                return  <Box value={value} onClick={()=> value === null && onClick(idx)} />
            })
        }
      

    </div>
    </>
  )
}

export default Board

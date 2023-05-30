import classNames from "classnames";
const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores; 
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white drop-shadow-lg w-1/4 flex gap-x-20 justify-center rounded-lg my-10 font-bold text-4xl">
        <span className={classNames("text-red-600  py-2", {
           " border-red-600" : xPlaying === true,
           "border-b-4" : xPlaying === true

        }
        )}>X - {xScore}</span>
        <span className={classNames("text-blue-600  py-2",{
            "border-blue-600" : xPlaying === false,
            "border-b-4" : xPlaying === false,

        })}>O - {oScore}</span>

        </div>
      </div>
    </>
  )
}

export default ScoreBoard

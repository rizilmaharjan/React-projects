import JokeSection from "./JokeSection";
import Button from "./Button";
const JokePanel = () => {
  return (
    <>
        <div className="w-1/3 h-2/4 bg-white drop-shadow-lg mt-10 mx-auto flex flex-col items-center gap-10 pb-10" >
            <h1 className="capitalize text-center text-3xl text-blue-700 pt-4">random joke generator</h1>
            <JokeSection />
            <Button />
        </div>
      
    </>
  )
}

export default JokePanel

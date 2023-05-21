import useApi from "../hook/ApiHook"
const JokeSection = () => {
    const [jokes] = useApi()
    console.log(jokes)
  return (
    <>
      <div className="w-3/4 h-1/2 bg-white drop-shadow-xl">
        {
            jokes.length > 0 ? (
                jokes.map((joke)=>{
                    return <p>{joke.joke}</p>
                })
            ):(
                <p>Loading...</p>
            )
        }

      </div>
    </>
  )
}

export default JokeSection

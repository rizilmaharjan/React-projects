import { useQuery } from "react-query";
import axios from "axios";
const JokeSection = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "joke",
    async () => {
      const options = {
        method: "GET",
        url: "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes",
        headers: {
          "X-RapidAPI-Key":
            "b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5",
          "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        return response.data[0].joke;
      } catch (error) {
        throw new Error(error);
      }
    }
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      
        <div className="w-11/12 bg-white drop-shadow-xl py-4 px-8">
          <p>{data}</p>
        </div>
        <button onClick={refetch} className="border py-2 px-6 bg-blue-600 font-bold text-white rounded-lg">Next</button>
      
    </>
  );
};

export default JokeSection;

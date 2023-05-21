import axios from "axios";
import { useEffect, useState } from "react";
const useApi = () => {
  const [jokes, setJokes] = useState([]);

  const options = {
    method: "GET",
    url: "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes",
    headers: {
      "X-RapidAPI-Key": "b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
  };
  const generateJokes = async () => {
    try {
      const response = await axios.request(options);
      const jokes = response.data;
      setJokes(jokes);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    generateJokes();
  }, []);

  return [jokes]
};

export default useApi;

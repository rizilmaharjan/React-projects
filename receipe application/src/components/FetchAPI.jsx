import { useQuery } from "react-query";
import axios from "axios";

const FetchAPI = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchAPI = (url) => {
  return useQuery(["recipe", url], () => FetchAPI(url)); 
};

export default useFetchAPI;

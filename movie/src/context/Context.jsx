import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const AppContext = createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=ca4d6674`;

const Context = ({ children }) => {
  const [query, setQuery] = useState("titanic");
  const [movie, setMovie] = useState([])
 
  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response == "True") {
        setMovie(data.Search);
       
      } else {
        throw new Error(data.Error)
      }
    } catch (error) {
      throw new Error(error)
    }
  };
  const {isLoading, isError} = useQuery(["movies", query],()=>{
    getMovies(`${API_URL}&s=${query}`)
   })
 
  return (
    <>
      <AppContext.Provider
        value={{ isLoading, isError, movie, query, setQuery }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

// creating customHook
const UseGlobalContextHook = () => {
  return useContext(AppContext);
};

export default Context;
export { UseGlobalContextHook };

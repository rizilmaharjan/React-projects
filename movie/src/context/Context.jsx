import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=ca4d6674`;

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({
    show: "false",
    msg: "",
  });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response == "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query]);
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

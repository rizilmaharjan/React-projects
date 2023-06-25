import { workoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const useWorkoutsContext = () => {
  const context = useContext(workoutsContext);
  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside an workoutsContextProvider"
    );
  }
  return context;
};

const getData = async (url) => {
  const { data } = await axios.get(url);
  return data

};
export const useFetchData = (url) => {
  return useQuery(["todos", url], () => getData(url));
};

export { useWorkoutsContext };

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../Hooks/UseWorkoutContext";
import { useFetchData } from "../Hooks/UseWorkoutContext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();


  const {data:myworkout, error, isError, isLoading} = useFetchData("http://localhost:4000/api/workouts")
  // if(myworkout){
  //   return dispatch({ type: "SET_WORKOUTS", payload: myworkout });
  // }
  if(isLoading) return <span>Loading...</span>
  if(isError) return <span>Error: {error.message}</span>


  console.log(myworkout)

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch("http://localhost:4000/api/workouts");
  //     const json =
  //       await response.json(); /* returns all the workouts in the database in the form of array of objects */

  //     if (response.ok) {
  //       dispatch({ type: "SET_WORKOUTS", payload: json });
  //     }
  //     console.log(json)
  //   };
  //   fetchWorkouts();
  // }, []);
  return (
    <>
      <div className="home grid grid-cols-2 gap-3 ">
        <div className="mt-10 w-full flex flex-col items-center">
          {myworkout &&
            myworkout.map((workout) => {
              return <WorkoutDetails key={workout._id} workout={workout} />;
            })}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
};

export default Home;

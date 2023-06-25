import { AiOutlineDelete } from "react-icons/ai";
import { useWorkoutsContext } from "../Hooks/UseWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutsContext();
  const handleClick = async()=>{
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
      method: "DELETE"
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:"DELETE", payload:json})
  
  
    }

  }
  return (
    <>
      <div className="bg-white mt-2 w-2/3 p-3 shadow-xl border-2 flex items-center justify-around ">
        <div>
          <h4 className="text-green-700 capitalize font-bold text-2xl pb-3 ">
            {workout.title}
          </h4>
          <p>
            <strong>Load (kg):</strong>
            {workout.load}
          </p>
          <p>
            <strong>Reps:</strong>
            {workout.reps}
          </p>
          <p>{workout.createdAt}</p>
        </div>
        <span>
          <button onClick={handleClick}>
            <AiOutlineDelete className="text-2xl hover:scale-[1.5] hover:ease-in-out hover:text-red-600 "/>
          </button>
        </span>
      </div>
    </>
  );
};

export default WorkoutDetails;

import React, { useState, useRef } from "react";
import { useWorkoutsContext } from "../Hooks/UseWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [error, setError] = useState(null);
  const title = useRef();
  const load = useRef();
  const reps = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const workout = {
      title: title.current.value,
      load: load.current.value,
      reps: reps.current.value,
    };
    const response = await fetch("http://localhost:4000/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json =
      await response.json(); /* returns the workout you added in object  */

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      title.current.value = "";
      load.current.value = "";
      reps.current.value = "";

      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <form
        method="POST"
        onSubmit={submitHandler}
        className="mt-10 p-8 flex flex-col items-center"
      >
        <div className="mb-5">
          <h1 className="capitalize text-2xl font-bold">add a new workout</h1>
        </div>
        <div className="py-2">
          <label className="text-xl capitalize">Title:</label>
          <br />
          <input
            ref={title}
            className="mt-2  py-1  border-b outline-none  border-black "
            type="text"
          />
        </div>
        <div className="py-2">
          <label className="text-xl capitalize">Load(kg):</label>
          <br />
          <input
            ref={load}
            className="mt-2 border-b outline-none border-black py-1"
            type="number"
          />
        </div>
        <div className="py-2">
          <label className="text-xl capitalize">reps:</label>
          <br />
          <input
            ref={reps}
            className="mt-2 border-b outline-none border-black py-1"
            type="number"
          />
        </div>
        <button className="mt-10 border border-black py-2 px-8 rounded-md text-lg capitalize font-bold hover:bg-blue-600 hover:text-white hover:ease-in-out hover:duration-500 ">
          submit
        </button>
        {error && (
          <div className="mt-4 w-1/2 p-2 border border-red-500 text-red-500 font-bold rounded-md shadow-lg">
            <p>{error}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default WorkoutForm;

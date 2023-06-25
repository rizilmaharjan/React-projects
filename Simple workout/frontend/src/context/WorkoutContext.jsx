import { createContext,useReducer } from "react"

const workoutsContext = createContext()
const workoutsReducer = (state, action)=>{
    switch(action.type){
        case "SET_WORKOUTS":
            return {
                ...state,
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return{
                ...state,
                workouts:[action.payload, ...state.workouts]
            }
        case "DELETE":
          return{
            ...state,
            workouts: state.workouts.filter((workout)=> workout._id !== action.payload._id)
          }
        default:
          return state
    }
}
const WorkoutContext = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer,{
        workouts: null
    })
    // dispatch({type:"SET_WORKOUTS", payload:[{},{}] })
  return (
    <>
      <workoutsContext.Provider value={{...state, dispatch}} >
        {children}
      </workoutsContext.Provider>
    </>
  )
}

export {WorkoutContext,workoutsContext }

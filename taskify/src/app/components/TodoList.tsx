import { Todo } from "./Model"
import SingleTodo from "./SingleTodo";
type todolistprops = {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({todos, setTodos}:todolistprops) => {
  return (
    <>
      <div>
        {
            todos.map((todo)=>{
                return(
                   <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                )
            })
        }
      </div>
    </>
  )
}

export default TodoList

import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";
type todolistprops = {
  
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: todolistprops) => {
  return (
    <>
      <div className="flex w-4/5 mx-auto justify-around py-4 gap-4">
        <Droppable droppableId="TodosList">
          {(provided) => (
            <div
              className="bg-teal-400 px-3 py-2 h-full rounded-lg w-full "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="font-semibold text-white text-2xl">
                Active Tasks
              </span>
              {todos.map((todo, index) => {
                return (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                );
              })}
              {
                provided.placeholder
              }
            </div>
          )}
        </Droppable>

        <Droppable droppableId="TodosRemove">
          {(provided) => (
            <div
              className="bg-red-400 h-full w-full px-3 py-2 rounded-lg "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="font-semibold text-white text-2xl">Completed Tasks</span>
              {completedTodos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todos={completedTodos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TodoList;

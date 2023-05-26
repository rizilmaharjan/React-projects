import { useState } from "react";
import { Todo } from "./Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, todo: editTodo } : todo;
      })
    );
    setEdit(false);
  };
  return (
    <>
        <Draggable draggableId={todo.id.toString()} index={index}>

          {(provided)=>(
            <div className="hover:cursor-pointer hover:skew-x-6 hover:ease-in-out hover:duration-300" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <form
              onSubmit={(e) => handleEdit(e, todo.id)}
              className="flex bg-yellow-400 w-full my-4 px-3 py-2 rounded-md gap-4 justify-between"
            >
              {edit ? (
                <input
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  type="text"
                />
              ) : todo.isDone ? (
                <s className="capitalize">{todo.todo}</s>
              ) : (
                <div className="capitalize">{todo.todo}</div>
              )}
              <div className="flex gap-2 px-8 items-center cursor-pointer">
                <span
                  onClick={() => {
                    if (!edit && !todo.isDone) {
                      setEdit(!edit);
                    }
                  }}
                >
                  <AiFillEdit className="text-2xl" />
                </span>
                <span onClick={() => handleDelete(todo.id)}>
                  <AiFillDelete className="text-2xl" />
                </span>
                <span onClick={() => handleDone(todo.id)}>
                  <MdDone className="text-2xl" />
                </span>
              </div>
            </form>
          </div>

          )

          }

      
      </Draggable>
    </>
  );
};

export default SingleTodo;

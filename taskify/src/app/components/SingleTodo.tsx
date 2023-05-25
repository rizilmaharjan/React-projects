import { useState } from "react";
import { Todo } from "./Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
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
    setEdit(false)
  };
  return (
    <>
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        className="flex bg-yellow-400 w-80 my-4 px-3 py-2 rounded-lg mx-auto gap-4 justify-between"
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
    </>
  );
};

export default SingleTodo;

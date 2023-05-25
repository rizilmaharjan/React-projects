"use client";
import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";

const Taskify = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  };
  return (
    <>
      <div className="h-screen bg-blue-500">
        <span className="text-white font-semibold text-3xl">
          <h1 className="text-center py-4">Taskify</h1>
        </span>
        <InputField todo={todo} handleAdd={handleAdd} setTodo={setTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default Taskify;

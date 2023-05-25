type Props = {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent)=> void;
}
const InputField = ({todo, setTodo, handleAdd}: Props) => {
  return (
    <>
      <form className="flex justify-center" onSubmit={handleAdd}>
        <div className="relative">

        <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" className="py-3 px-5 rounded-full outline-red-700" />
        <button type="submit" className="border px-1.5 py-1 bg-blue-500 right-2 top-1.5 absolute text-white rounded-full">Go</button>
        </div>
      </form>
    </>
  )
}

export default InputField

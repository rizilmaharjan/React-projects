
const Button = ({value,onclick}) => {
  return (
    <>
      <button onClick={onclick} className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold capitalize ">{value}</button>
    </>
  )
}

export default Button

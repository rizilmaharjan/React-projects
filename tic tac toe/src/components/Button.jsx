import classNames from "classnames";
const Button = ({ value, onClick }) => {
  return (
    <>
      <button className="bg-white rounded-md drop-shadow-lg w-24 h-24 text-center hover:drop-shadow-xl" onClick={onClick}>
        <div
          className={classNames(
            "${value} ?  w-full h-full font-link text-9xl font-bold line leading-3 mt-6",
            {
              "text-blue-600": value === "o",
              "text-red-600": value === "x",
            }
          )}
        >
          {value}
        </div>
      </button>
    </>
  );
};

export default Button;

export const Form = ({ val }) => {
  return (
    <div>
      <input
        className="border-2 border-t-0 border-r-0 border-l-0 outline-none "
        type={val.type}
        placeholder={val.placeholder}
      />
    </div>
  );
};

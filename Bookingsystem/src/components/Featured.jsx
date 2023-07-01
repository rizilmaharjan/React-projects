export const Featured = ({ imgs, name, properties }) => {
  return (
    <>
      <div className="relative">
        <div className="w-72 h-72 rounded-lg">
          <img
            className="rounded-lg w-full"
            src={imgs}
            alt={name}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute top-[50%] flex w-full flex-col items-start text-white font-bold text-xl px-2">
          <h1>{name}</h1>
          <p>{properties} properties</p>
        </div>
      </div>
    </>
  );
};

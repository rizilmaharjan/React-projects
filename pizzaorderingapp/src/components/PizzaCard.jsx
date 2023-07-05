export const PizzaCard = ({name,image,price}) => {
  return (
    <>
        <div className="w-72 h-[20rem] cursor-pointer">
          <div className="h-60">
            <img src={image} alt={name} className="h-full" />

          </div>
           
           
            <div>
                <h1 className="uppercase py-2 text-red-700 font-semibold text-xl">{name}</h1>
                <p className="font-bold text-lg">${price}</p>
            </div>
        </div>

    </>
  )
}

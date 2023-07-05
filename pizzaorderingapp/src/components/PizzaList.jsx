import { PizzaCard } from "./PizzaCard"
import { pizzaData } from "../data/pizzaData"
import { NavLink } from "react-router-dom"
export const PizzaList = () => {
  return (
    <>
        <div className="w-10/12 mx-auto">
            <h1 className="capitalize font-bold py-8 text-2xl">the best pizza in town</h1>
            <p className="text-lg text-justify">Pizza in town is an experience that brings joy to both locals and visitors alike. With its tantalizing aroma and mouthwatering flavors, pizza joints dotted throughout the town offer a slice of culinary delight. From cozy family-owned pizzerias to trendy pizza bars, there is something for everyone's pizza cravings. The air is filled with anticipation as pizza lovers eagerly await their orders, whether it's a classic Margherita, a loaded meat lover's delight, or a gourmet creation with unique toppings.</p>
            <div className="mt-10 mb-10">
              <h1 className="text-5xl font-semibold font-cursive">Pizzas</h1>
            </div>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
              {
                pizzaData.map((item)=>{
                  return (
                    <NavLink to={`products/${item.id}`} >
                      <PizzaCard {...item} />
                    </NavLink>
                  ) 
                })

              }
               
                

            </div>
        </div>

    </>
  )
}

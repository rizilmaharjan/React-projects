import { PizzaCard } from "./PizzaCard"
export const PizzaList = () => {
  return (
    <>
        <div className="w-10/12 mx-auto">
            <h1 className="capitalize font-bold py-8 text-2xl">the best pizza in town</h1>
            <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptatem aut. Voluptates ipsa tempora dolorum commodi cumque maxime, deserunt expedita debitis tempore in nobis.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />

            </div>
        </div>

    </>
  )
}

import React from "react";
import classes from "./AvailabeMeals.module.css";
import Card from "../Ui/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <>
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal,index) => (
            <Card>
              <MealItem key={index} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />
            </Card>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AvailableMeals;

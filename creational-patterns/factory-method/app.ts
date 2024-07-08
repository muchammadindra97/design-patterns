import {Breakfast} from "./Breakfast";
import {Lunch} from "./Lunch";
import {Food} from "./Food";
import {Dinner} from "./Dinner";

const hour = new Date().getHours();

function run(food: Food) {
    const meal = food.createMeal();
    console.log(`Current hour (${hour}): ${meal.eat()}`);
}

if (hour > 0 && hour <= 11) run(new Breakfast());
else if (hour > 11 && hour <= 18) run(new Lunch());
else run(new Dinner())
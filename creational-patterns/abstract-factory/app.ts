import {Restaurant} from "./restaurant";
import {JapaneseRestaurant} from "./japaneseRestaurant";
import {IndonesianRestaurant} from "./indonesianRestaurant";

function runClient(restaurant: Restaurant) {
    const breakfast = restaurant.createBreakfast();
    const lunch = restaurant.createLunch();
    const dinner = restaurant.createDinner();

    console.log('Today Menu');
    console.log('Breakfast: ', breakfast.name());
    console.log('Lunch: ', lunch.name());
    console.log('Dinner: ', dinner.name());
}

const day = new Date().getDay();

if (day % 2 === 0) runClient(new JapaneseRestaurant());
else runClient(new IndonesianRestaurant());
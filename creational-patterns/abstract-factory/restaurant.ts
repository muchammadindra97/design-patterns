import {Meal} from "./meal";

export interface Restaurant {
    createBreakfast(): Meal;
    createLunch(): Meal;
    createDinner(): Meal;
}
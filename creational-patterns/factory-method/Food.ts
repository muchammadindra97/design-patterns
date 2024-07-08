import {IMeal} from "./IMeal";

export abstract class Food {
    abstract createMeal(): IMeal;
}
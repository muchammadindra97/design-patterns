import {IMeal} from "./IMeal";
import {BuburAyam} from "./BuburAyam";
import {Food} from "./Food";

export class Breakfast extends Food {
    createMeal(): IMeal {
        return new BuburAyam();
    }
}
import {IMeal} from "./IMeal";
import {SataiAyam} from "./SataiAyam";
import {Food} from "./Food";

export class Dinner extends Food {
    createMeal(): IMeal {
        return new SataiAyam();
    }
}
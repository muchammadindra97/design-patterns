import {Kitchen} from "./Kitchen";
import {IMeal} from "./IMeal";
import {SataiAyam} from "./SataiAyam";

export class Dinner extends Kitchen {
    serveMeal(): IMeal {
        return new SataiAyam();
    }
}
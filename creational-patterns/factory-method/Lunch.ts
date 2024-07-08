import {IMeal} from "./IMeal";
import {NasiPadang} from "./NasiPadang";
import {Food} from "./Food";

export class Lunch extends Food{
    createMeal(): IMeal {
        return new NasiPadang();
    }
}
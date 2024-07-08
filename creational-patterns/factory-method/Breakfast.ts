import {Kitchen} from "./Kitchen";
import {IMeal} from "./IMeal";
import {BuburAyam} from "./BuburAyam";

export class Breakfast extends Kitchen{
    serveMeal(): IMeal {
        return new BuburAyam();
    }
}
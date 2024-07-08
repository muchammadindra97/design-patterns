import {Kitchen} from "./Kitchen";
import {IMeal} from "./IMeal";
import {NasiPadang} from "./NasiPadang";

export class Lunch extends Kitchen{
    serveMeal(): IMeal {
        return new NasiPadang();
    }
}
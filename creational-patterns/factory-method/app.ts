import {IMeal} from "./IMeal";
import {Breakfast} from "./Breakfast";
import {Lunch} from "./Lunch";

const hour = new Date().getHours();

function getMeal(): IMeal {
    if (hour > 0 && hour <= 11) return new Breakfast().serveMeal();
    else if (hour > 11 && hour <= 18) return new Lunch().serveMeal();
    else return new Breakfast().serveMeal();
}

console.log(getMeal().eat());
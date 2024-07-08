import {Restaurant} from "./restaurant";
import {Meal} from "./meal";

class Onigiri implements Meal {
    name(): string {
        return "Onigiri";
    }
}

class Takoyaki implements Meal {
    name(): string {
        return "Takoyaki";
    }
}

class Ramen implements Meal {
    name(): string {
        return "Ramen";
    }
}

export class JapaneseRestaurant implements Restaurant {
    createBreakfast(): Meal {
        return new Onigiri();
    }

    createDinner(): Meal {
        return new Takoyaki();
    }

    createLunch(): Meal {
        return new Ramen();
    }
}
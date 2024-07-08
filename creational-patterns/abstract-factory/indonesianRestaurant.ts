import {Restaurant} from "./restaurant";
import {Meal} from "./meal";

class BuburAyam implements Meal {
    name(): string {
        return "Bubur Ayam";
    }
}

class NasiWarteg implements Meal {
    name(): string {
        return "Nasi Warteg";
    }
}

class MieRebus implements Meal {
    name(): string {
        return "Mie Rebus";
    }
}

export class IndonesianRestaurant implements Restaurant {
    createBreakfast(): Meal {
        return new BuburAyam();
    }

    createDinner(): Meal {
        return new NasiWarteg();
    }

    createLunch(): Meal {
        return new MieRebus();
    }
}
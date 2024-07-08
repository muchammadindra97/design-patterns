import {IMeal} from "./IMeal";

export class BuburAyam implements IMeal {
    eat(): string {
        return "Eating bubur ayam...";
    }
}
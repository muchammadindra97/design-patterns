import {Car} from "./car";

export class CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    setGasLevel(level: number) {
        this.car.gas = level;
    }

    setBatteryLevel(level: number) {
        this.car.battery = level;
    }

    getCar(): Car {
        const car = this.car;
        this.car = new Car();
        return car;
    }
}
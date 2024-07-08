import {Car} from "./car";
import {CarBuilder} from "./carBuilder";
import {Director} from "./director";

function runClient() {
    const day = new Date().getDay();
    const director = new Director();
    const carBuilder = new CarBuilder();

    let car: Car;

    if (day % 2 === 0) {
        director.buildGasolineCar(carBuilder);
    } else {
        director.buildElectricCar(carBuilder);
    }

    car = carBuilder.getCar();
    car.drive();
}

runClient();
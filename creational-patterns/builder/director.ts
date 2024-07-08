import {CarBuilder} from "./carBuilder";

export class Director {
    buildGasolineCar(carBuilder: CarBuilder) {
        carBuilder.setGasLevel(35);
    }

    buildElectricCar(carBuilder: CarBuilder) {
        carBuilder.setBatteryLevel(100)
    }
}
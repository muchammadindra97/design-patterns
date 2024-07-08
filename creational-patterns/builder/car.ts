export class Car {
    gas = 0;
    battery = 0;

    drive() {
        if (this.gas > 0) {
            console.log('Driving electric car....');
        } else {
            console.log('Driving gasoline car....');
        }
    }
}
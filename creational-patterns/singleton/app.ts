import {Kitchen} from "./kitchen";

function runClient() {
    setInterval(() => {
        const kitchen = Kitchen.getKitchen();
        // const kitchen = new Kitchen(); // Should be error!

        const date = new Date();

        console.log('Calling meal at ' + date.toLocaleTimeString());
        console.log('Kitchen already open at ' + kitchen.initializedTime);
        kitchen.serve();
        console.log('');

    }, 2000);
}

runClient();
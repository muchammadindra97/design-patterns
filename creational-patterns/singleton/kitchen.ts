export class Kitchen {
    initializedTime: string = '';
    private static instance: Kitchen;

    static getKitchen() {
        if (!this.instance) {
            this.instance = new Kitchen();
            this.instance.initializedTime = new Date().toLocaleTimeString();
        }

        return this.instance;
    }

    // To block creating object using 'new' keyword
    private constructor() {
    }

    serve() {
        console.log('Serving meal....')
    }
}
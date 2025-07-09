class Apple {
    constructor() {
        this.weight = 10;
    }

    decreaseApple() {
        if (this.weight > 0) {
            this.weight -= 1;
        }
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        return this.weight === 0;
    }
}

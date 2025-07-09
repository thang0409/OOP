class Battery {
    constructor() {
        this.energy = 100;
        this.decrease = '';
    }

    setEnergy(n) {
        this.energy = n;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy -= 10;
        }
    }
}

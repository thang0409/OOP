class Lamp {
    constructor() {
        this.status = false;
        this.battery = null;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        if (this.battery) {
            return this.battery.getEnergy();
        }
        return 0;
    }

    light() {
        if (this.status && this.battery && this.battery.getEnergy() > 0) {
            this.battery.decreaseEnergy();
            console.log('Đèn sáng');
        } else {
            console.log('Đèn tắt');
        }
    }

    turnOn() {
        this.status = true;
        this.light();
    }

    turnOff() {
        this.status = false;
        console.log(' Đèn đã tắt');
    }
}

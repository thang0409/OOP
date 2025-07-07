class Temperature {
    temp;

    constructor(temp) {
        this.temp = temp;
    }

    getMinimum() {
        if (this.temp < -273) {
            return this.temp + ' phải lớn hơn -273 độ C';
        }
        return null;
    }

    getReverseFahrenheit() {
        const err = this.getMinimum();
        if (err) return err;
        let f = (this.temp * 9) / 5 + 32;
        return this.temp + 'dộ C = ' + f + 'độ F';
    }

    getReverseKelvin() {
        const err = this.getMinimum();
        if (err) return err;
        let k = this.temp + 273.15;
        return this.temp + 'dộ C = ' + k + 'dộ K';
    }
}

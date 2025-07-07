class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getCircumference() {
        let c = (this.width + this.height) * 2;
        return 'Chu vi hình chũ nhật là :' + c;
    }

    getArea() {
        let s = this.width * this.height;
        return 'Diện tích hình chũ nhật là :' + s;
    }
}

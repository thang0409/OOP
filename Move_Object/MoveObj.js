class MoveObj {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.top = 0;
        this.left = 0;
        this.element.style.position = 'relative';
        this.element.style.top = '0px';
        this.element.style.left = '0px';
    }

    updatePosition() {
        this.element.style.top = this.top + 'px';
        this.element.style.left = this.left + 'px';
    }

    moveUp() {
        this.top -= 10;
        this.updatePosition();
    }

    moveDown() {
        this.top += 10;
        this.updatePosition();
    }

    moveLeft() {
        this.left -= 10;
        this.updatePosition();
    }

    moveRight() {
        this.left += 10;
        this.updatePosition();
    }
}

class Human {
    constructor(name, weight) {
        this.name = name;
        this.gender = false;
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        this.apple = apple;
    }

    eat() {
        if (this.apple && !this.apple.isEmpty()) {
            this.apple.decreaseApple();
            this.weight += 1;
            console.log(
                `${this.name} vừa ăn táo . Cân nặng hiện tại là ${
                    this.weight
                } Trọng lượng còn lại của táo là ${this.apple.getWeight()}
                `
            );
        } else {
            console.log('Đã ăn hêt táo');
        }
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}

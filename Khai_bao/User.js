class User {
    price;
    age;

    // Hàm khởi tạo

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return 'Student name:' + this.name + ' age: ' + this.age;
    }
}

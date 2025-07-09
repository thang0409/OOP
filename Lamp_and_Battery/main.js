let battery = new Battery();
let lamp = new Lamp();

lamp.setBattery(battery);

lamp.turnOn();
console.log('Năng lượng pin còn lại:', lamp.getBatteryInfo() + '%');

lamp.turnOn();
console.log('Năng lượng pin còn lại:', lamp.getBatteryInfo() + '%');

lamp.turnOff();

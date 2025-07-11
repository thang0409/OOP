let sony = new Tv(2, 10);
let remote = new Remote(1, sony);

sony.turnOn();
sony.getStatus();
console.log(sony.getChannel());

remote.setChannel(3);
remote.setVolume(12);
console.log(sony.getChannel());
console.log(sony.getVolum());

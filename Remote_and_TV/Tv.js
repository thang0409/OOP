class Tv {
    status;
    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
    }

    getStatus() {
        if (this.status) {
            console.log('Bật Tv');
        } else {
            console.log('Tắt Tv');
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    changeChannel(channel) {
        this.channel = channel;
    }

    changeVolume(volume) {
        this.volume = volume;
    }

    getChannel() {
        return `Tv đang ở kênh ${this.channel}`;
    }

    getVolum() {
        return `Volum : ${this.volume}`;
    }
}

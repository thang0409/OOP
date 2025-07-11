class Remote {
    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }

    setChannel(channel) {
        this.tv.channel = channel;
    }

    setVolume(volume) {
        this.tv.volume = volume;
    }
}

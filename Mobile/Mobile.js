class Mobile {
    name;
    isOn;
    battery;
    draf;
    inbox;
    sentMessage;

    constructor(name, isOn, battery, draf, inbox, sentMessage) {
        this.name = name;
        this.battery = 100;
        this.isOn = false;
        this.draf = '';
        this.inbox = [];
        this.sentMessage = [];
    }

    checkStatus() {
        return this.isOn ? 'Điện thoại bật' : 'Điện thoại tắt';
    }

    turnOn() {
        this.isOn = true;
        return 'Đã bật điện thoại';
    }

    turnOff() {
        this.isOn = false;
        return 'Đã tắt điện thoại';
    }

    chargeBattery() {
        this.battery = 100;
        return 'Đã sạc đầy pin';
    }

    consumeBattery() {
        if (this.battery > 0) {
            this.battery--;
            return true;
        }
        return false;
    }

    writeMess(mess) {
        if (!this.isOn) return 'Điện thoại đang tắt';
        if (!this.consumeBattery()) return 'Điện thoại hết pin';
        this.draf = mess;
        return 'Tin nhắn đã soạn ' + mess;
    }

    receiveMessage(message, senderName) {
        if (!this.isOn) return;
        if (!this.consumeBattery()) return;
        this.inbox.push(`Từ ${senderName}: ${message}`);
    }

    sendMess(send) {
        if (!this.isOn) return 'Điện thoại đang tắt';
        if (!this.consumeBattery()) return 'Điện thoại hết pin';
        if (!this.draf) return 'Không có tin nhắn để gửi';

        send.receiveMessage(this.draf, this.name);
        this.sentMessage.push(this.draf);
        let sent = this.draf;
        this.draf = '';
        return 'Đã gửi tin' + sent + 'đến' + send.name;
    }

    viewInbox() {
        if (!this.isOn) return 'Điện thoại đang tắt';
        if (!this.consumeBattery()) return 'Điện thoại hết pin';
        return this.inbox.length > 0 ? this.inbox.join('\n') : 'Hộp thư rỗng';
    }

    viewSendMess() {
        if (!this.isOn) return 'Điện thoại đang tắt';
        if (!this.consumeBattery()) return 'Điện thoại hết pin';
        return this.sentMessage.length > 0
            ? this.sentMessage.join('\n')
            : 'Chưa gửi tin nhắn nào';
    }
}

let phoneA = new Mobile('iPhone');
let phoneB = new Mobile('Samsung');

console.log(phoneA.turnOn());
console.log(phoneB.turnOn());

console.log(phoneA.writeMess('Hello Samsung!'));
console.log(phoneA.sendMess(phoneB));

console.log(phoneB.viewInbox());
console.log(phoneA.viewSendMess());

console.log(phoneA.battery);

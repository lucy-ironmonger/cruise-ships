
class Ship {
    constructor(startingPort, destinationPort) {
        this.startingPort = startingPort;
        this.destinationPort = destinationPort;
}

setSail() {
    return 'The ship has left ' + this.startingPort + ' and will arrive at ' + this.destinationPort;
}
}

class Port {
    constructor(name) {
        this.name = name;
    }
}
module.exports = { 
    Ship,
    Port
};
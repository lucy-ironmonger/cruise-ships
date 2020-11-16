
class Ship {
    constructor(startingPort, destinationPort) {
        this.startingPort = startingPort;
        this.destinationPort = destinationPort;
}

setSail() {
    return 'The ship has left from ' + startingPort;
}
}

module.exports = Ship;
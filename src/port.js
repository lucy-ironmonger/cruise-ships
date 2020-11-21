class Port {
    constructor(currentPort) { // fed in an argument which will become current port
        this.currentPort = currentPort;
        this.ships = [];
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(ship) {
        this.ships.pop(ship);
    }
};

module.exports = Port;


// this.shipName = shipName;
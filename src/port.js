class Port {
  constructor(currentPort) {
    this.currentPort = currentPort;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    this.ships.pop(ship);
  }
}

module.exports = Port;

class Ship {
  constructor(itinerary) {
    //takes an argument which is going to feed in the current port
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0]; // current port fed in as argument
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === (this.itinerary.ports.length-1)) {
        throw new Error("End of itinerary reached");
    }
  
    this.previousPort = this.currentPort; // changing previousport from null to current port (in ship)
    this.currentPort = null; //changing current port to null
  }

  dock() {
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  }
}

module.exports = Ship;


this.ships.addShip(ship);
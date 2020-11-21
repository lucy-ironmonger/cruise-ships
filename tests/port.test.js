const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Port constructor", () => {
  it("has a port object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("has a currentPort property", () => {
    const port = new Port("Dover");
    expect(port.currentPort).toEqual("Dover");
  });
});
describe('addShip', () => {
    it('add ship to ships property when it docks at port', () => {
        const port = new Port('Dover');
        const ship = {};
        
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});
describe('removeShip', () => {
    it('removes ship from ships property', () => {
        const port = new Port('Dover');
        const ship = {};
        
        port.addShip(ship);
        port.removeShip(ship);

        expect(port.ships).toEqual([]);
    });
});
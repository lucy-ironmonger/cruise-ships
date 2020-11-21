const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

// PORTS //
let skegness;
let dover;
let holland;
let berlin;
let calais;

// ITINERARY //
let itinerary;

// SHIPS LOTSA SHIPS //
let ship;

describe("Ship constructor", () => {
    beforeEach(() => {
        dover = new Port("Dover");
        itinerary = new Itinerary([dover]);
        ship = new Ship(itinerary);
    });

    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("checks that it has a starting port property", () => {
        expect(ship.currentPort).toEqual(dover);
    });

    it("gets added to port on instantiation", () => {
        expect(dover.ships).toContain(ship);
    });
});

describe("setSail", () => {
    let port;
    beforeEach(() => {
        port = {
            removeShip: jest.fn(), //are these mocks? //
            addShip: jest.fn(), //are these mocks? //
        };

        skegness = { //is this a stub? //
            ...port,
            name: 'Skegness',
            ships: [],
        };

        holland = {
            ...port,
            name: 'Holland',
            ships: [],
        };
        berlin = {
            ...port,
            name: 'Berlin',
            ships: [],
        };

        itinerary = new Itinerary([skegness, holland, berlin]);
        ship = new Ship(itinerary);
        port = jest.fn();
        ship.setSail();
    });

    it("tests if the ship has left the currentPort", () => {
        expect(ship.currentPort).toBeFalsy(); //changes current port to null
    });

    it("tests if the ship has been removed from the previous port's current port when it sets sail", () => {
        expect(skegness.removeShip).toHaveBeenCalledWith(ship);
    });

    it("sets the current port as the previous port once the ship has set sail", () => {
        expect(ship.previousPort).toEqual(itinerary.ports[0]);
    });

    it("can't sail further than its itinerary", () => {
        ship.dock();
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
});

describe("dock", () => {
    let port;
    beforeEach(() => {
        port = {
            removeShip: jest.fn(), //are these mocks? //
            addShip: jest.fn(), //are these mocks? //
        };

        dover = { //is this a stub? //
            ...port,
            name: 'Dover',
            ships: [],
        };

        calais = {
            ...port,
            name: 'Calais',
            ships: [],
        };
        
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();
    });

    it("tests if ship can dock at different ports", () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });
  });

  describe('dock part 2', () => {
    it("tests if the ship is added to the ship's property of the port when it docks", () => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
      ship.setSail();
      ship.dock();
  
      expect(calais.ships).toContain(ship);
    });
  });
  

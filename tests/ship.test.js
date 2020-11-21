const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship constructor", () => {
        const dover = new Port("Dover");
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
        
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
        const skegness = new Port("Skegness");
        const holland = new Port("Holland");
        const berlin = new Port("Berlin");
        const itinerary = new Itinerary([skegness, holland, berlin]);
        const ship = new Ship(itinerary);
        ship.setSail();
    
    it("tests if the ship has left the currentPort", () => {
        expect(ship.currentPort).toBeFalsy(); //changes current port to null
    });

    it("tests if the ship has been removed from the previous port's current port when it sets sail", () => {
        expect(skegness.ships).not.toContain(ship);
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
    const doverPort = new Port("Dover");
    const calaisPort = new Port("Calais");
    const itinerary = new Itinerary([doverPort, calaisPort]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    it("tests if ship can dock at different ports", () => {
        expect(ship.currentPort).toBe(calaisPort);
    });

    it("tests if the ship is added to the ship's property of the port when it docks", () => {
        expect(calaisPort.ships).toContain(ship);
    });
});

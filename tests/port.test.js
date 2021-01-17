const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let port;
const ship = jest.fn();

describe("Port constructor", () => {
  it("has a port object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("has a currentPort property", () => {
    port = new Port("Dover");
    expect(port.currentPort).toEqual("Dover");
  });
});

describe("addShip", () => {
  it("add ship to ships property when it docks at port", () => {
    port = {
      removeShip: jest.fn(), 
      addShip: jest.fn(), 
    };
    skegness = {
      ...port,
      name: "Skegness",
      ships: [],
    };

    port.addShip(ship);

    expect(port.addShip).toHaveBeenCalledWith(ship);
  });
});

describe("removeShip", () => {
  it("removes ship from ships property", () => {
    port = new Port("Dover");

    port.addShip(ship);
    port.removeShip(ship);

    expect(port.ships).toEqual([]);
  });
});

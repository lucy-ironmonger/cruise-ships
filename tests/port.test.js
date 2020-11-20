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

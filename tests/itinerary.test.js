const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let dover;
let calais;
let itinerary;

describe("itinerary", () => {
  it("is an itinerary object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    dover = jest.fn();
    calais = jest.fn();
    itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
});
});
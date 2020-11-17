const Ship = require('../src/ship');

describe('constructor', ()=> {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('checks that it has a starting port property', () => {
        const ship = new Ship('Bahamas')
        expect(ship.startingPort).toEqual('Bahamas');
    })
});

describe('setSail', () => {
    it('sets the ship sailing', () => {
        const ship = new Ship ('Spain', 'the Bahamas');
        expect(ship.setSail()).toEqual('The ship has left Spain and will arrive at the Bahamas');
    });
});


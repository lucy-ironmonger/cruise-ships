const Ship = require('../src/ship');

describe('constructor', ()=> {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('checks that it has a starting port property', () => {
        const ship = new Ship('Boaty')
        expect(ship.startingPort).toEqual("");
    })
});


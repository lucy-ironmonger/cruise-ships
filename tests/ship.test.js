const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship constructor', ()=> {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('checks that it has a starting port property', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toEqual(port);
    })
});

describe('setSail', () => {
    // it('sets the ship sailing', () => {
    //     const port = new Port ('Spain', 'the Bahamas');
    //     const ship = new Ship (port);
    //     expect(ship.setSail()).toEqual('The ship has left Spain and will arrive at the Bahamas');
    // });
    it('tests if the ship has left the currentPort', () => {
        const port = new Port ('Skegness');
        const ship = new Ship (port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});
describe('dock', () => {
    it('tests if ship can dock at different ports', () => {
        const doverPort = new Port('Dover');
        const calaisPort = new Port('Calais');
        const ship = new Ship (doverPort);

        ship.dock(calaisPort);

        expect(ship.currentPort).toEqual(calaisPort);
    });
});



const {
    Ship,
    Port
 } = require('../src/ship');

describe('Ship constructor', ()=> {
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
    it('tests if the ship has left the startingPort', () => {
        const ship = new Ship ('Spain', 'the Bahamas');
        ship.setSail()
        expect(ship.startingPort).toBeFalsy();
    });
});

describe('Port constructor', () => {
    it('has a port object', () => {
        expect(new Port).toBeInstanceOf(Object);
    })

    it('has a name property', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    })
})



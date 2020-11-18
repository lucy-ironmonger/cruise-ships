const Port = require('../src/port');

describe('Port constructor', () => {
    it('has a port object', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
    it('has a currentPort property', () => {
        const port = new Port('Dover');
        expect(port.currentPort).toEqual('Dover');
    });
    // it('destination port to equal Port', () => {
    //     const port = new Port('Dover');
    //     const ship = new Ship('Boaty');
    //     expect(ship.destinationPort).toEqual(port.name);
    // });
});
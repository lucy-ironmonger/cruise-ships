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
        const ship = new Ship ('Spain')
        setSail();
        expect(ship.setSail()).toEqual('The ship has left from Spain');
    });

});


// STAGE 1 //
// starting port = Bahamas
// destination port = Spain

// Sets sail

// STAGE 2
// starting port = Spain
// destination port = ""

/*
setSail() {
    this.startingPort = destinationPort;
}
}

describe('setSail', () => {
    it('the original destination port becomes the starting port', () => {
        const ship = new Ship ('Bahamas', 'Spain')
        setSail();
        expect(ship.startingPort).toEqual('Spain');
    })

    it('the new destination port becomes a blank string', () => {
        const ship = new Ship ('Bahamas', 'Spain')
        setSail();
        expect(ship.destinationPort).toEqual('');
    })

})*/


class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
        // this.destinationPort = destinationPort;
    };

    setSail() {
        // let announceLeftPort = this.currentPort;
        this.currentPort = null;
        // return 'The ship has left ' + 
        //     announceLeftPort + 
        //     ' and will arrive at ' + 
        //     this.destinationPort;
    };
    dock(newPort) {
        this.currentPort = newPort;
    }
};


module.exports = Ship;
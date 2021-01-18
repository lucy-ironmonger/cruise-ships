(function () {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;

      document.querySelector("#setSailButton").addEventListener("click", () => {
        this.setSail();
      });
    }

    initialiseSea() {
      const backgrounds = ["images/water0.png", "images/water1.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderShip() {
      const shipPortIndex = this.ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop - 60}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }

    renderPorts() {
      let portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      if (portsElement.hasChildNodes()){ 
        while (portsElement.firstChild) {
          portsElement.removeChild(portsElement.firstChild);
        }
     }
        if(this.ship.itinerary.ports.length > 0){

      this.ship.itinerary.ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }}

    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }

    setSail() {
      this.ship = ship;
      const currentPortIndex = this.ship.itinerary.ports.indexOf(
        ship.currentPort
      );
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      if (!nextPortElement) {
        return this.renderMessage("End of the line! Everybody into the sea!");
      }

      this.renderMessage(`Now departing ${ship.currentPort.name}`);
      const shipElement = document.querySelector("#ship");

      const portPosition = nextPortElement.offsetLeft;
      let shipPosition = shipElement.offsetLeft;

      ship.setSail();
      const sailInterval = setInterval(() => {
        if (shipPosition === portPosition - 32) {
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipPosition + 1}px`;
        shipPosition += 1;
      }, 10);

      ship.dock();
      setTimeout(() => {
        this.renderMessage(
          `Now arriving at ${this.ship.itinerary.ports[nextPortIndex].name}`
        );
      }, 2000);
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();

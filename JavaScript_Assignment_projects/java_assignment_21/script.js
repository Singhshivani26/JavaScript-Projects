// Parent Class: Vehicle
class Vehicle {
    constructor(type, number, capacity) {
        this.type = type;
        this.number = number;
        this.capacity = capacity;
        this.passengers = [];
    }

    display() {
        return `${this.type} (Number: ${this.number}, Capacity: ${this.capacity})`;
    }

    addPassenger(passenger) {
        if (this.passengers.length >= this.capacity) {
            throw new Error(`${this.type} ${this.number} is full!`);
        }
        if (this.passengers.find(p => p.name === passenger.name)) {
            throw new Error(`${passenger.name} is already on this vehicle.`);
        }
        this.passengers.push(passenger);
        passenger.onVehicle = true;
        return `${passenger.name} added to ${this.type} ${this.number}`;
    }

    removePassenger(passengerName) {
        const index = this.passengers.findIndex(p => p.name === passengerName);
        if (index === -1) {
            throw new Error(`${passengerName} is not on this vehicle.`);
        }
        this.passengers[index].onVehicle = false;
        this.passengers.splice(index, 1);
        return `${passengerName} removed from ${this.type} ${this.number}`;
    }

    listPassengers() {
        if (this.passengers.length === 0) {
            return `No passengers on ${this.type} ${this.number}.`;
        }
        return this.passengers.map(p => p.display()).join("\n");
    }
}

// Subclasses for specific vehicle types
class Bus extends Vehicle {}
class Train extends Vehicle {}
class Subway extends Vehicle {}
class Tram extends Vehicle {}

// Passenger Class
class Passenger {
    constructor(name, age, destination) {
        this.name = name;
        this.age = age;
        this.destination = destination;
        this.onVehicle = false;
    }

    display() {
        return `${this.name}, Age: ${this.age}, Destination: ${this.destination}`;
    }
}

// Global arrays to hold vehicles and passengers
const vehicles = [];
const passengers = [];

// Event listeners for user actions
document.getElementById("addVehicleButton").addEventListener("click", () => {
    const type = document.getElementById("vehicleType").value.trim();
    const number = document.getElementById("vehicleNumber").value.trim();
    const capacity = parseInt(document.getElementById("vehicleCapacity").value);

    if (!type || !number || isNaN(capacity)) {
        alert("Please provide valid vehicle details.");
        return;
    }

    vehicles.push(new Vehicle(type, number, capacity));
    alert(`${type} ${number} added successfully!`);
});

document.getElementById("addPassengerButton").addEventListener("click", () => {
    const name = document.getElementById("passengerName").value.trim();
    const age = parseInt(document.getElementById("passengerAge").value);
    const destination = document.getElementById("passengerDestination").value.trim();

    if (!name || isNaN(age) || !destination) {
        alert("Please provide valid passenger details.");
        return;
    }

    passengers.push(new Passenger(name, age, destination));
    alert(`${name} added successfully!`);
});

document.getElementById("listVehiclesButton").addEventListener("click", () => {
    const output = document.getElementById("output");
    if (vehicles.length === 0) {
        output.innerText = "No vehicles added yet.";
        return;
    }

    output.innerText = vehicles.map(v => v.display()).join("\n");
});

document.getElementById("listPassengersButton").addEventListener("click", () => {
    const output = document.getElementById("output");
    if (passengers.length === 0) {
        output.innerText = "No passengers added yet.";
        return;
    }

    output.innerText = passengers.map(p => p.display()).join("\n");
});

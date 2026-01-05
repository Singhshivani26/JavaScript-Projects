// Class definition for RockBand
let RockBand = class {
    constructor(name, members, genre) {
        this.name = name;
        this.members = members;
        this.genre = genre;
    }

    display() {
        return `${this.name} is a ${this.genre} band, with members ${this.members.join(", ")}.`;
    }
};

// Array to hold instances of RockBand
const bands = [];

// Predefined bands (steps 4-6)
const metallica = new RockBand(
    "Metallica",
    ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
    "Heavy Metal"
);
const pinkFloyd = new RockBand(
    "Pink Floyd",
    ["David Gilmour", "Roger Waters", "Nick Mason", "Richard Wright"],
    "Progressive Rock"
);
const ledZeppelin = new RockBand(
    "Led Zeppelin",
    ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
    "Hard Rock"
);

// Add predefined bands to the array
bands.push(metallica, pinkFloyd, ledZeppelin);

// Add event listeners for buttons
document.getElementById("addBandButton").addEventListener("click", addBand);
document.getElementById("displayBandButton").addEventListener("click", displayBands);

// Function to add a new band
function addBand() {
    const bandName = document.getElementById("bandName").value.trim();
    const bandMembers = document.getElementById("bandMembers").value.split(",").map(member => member.trim());
    const bandGenre = document.getElementById("bandGenre").value.trim();

    if (!bandName || bandMembers.length === 0 || !bandGenre) {
        alert("Please fill out all fields.");
        return;
    }

    const band = new RockBand(bandName, bandMembers, bandGenre);
    bands.push(band);

    document.getElementById("bandName").value = "";
    document.getElementById("bandMembers").value = "";
    document.getElementById("bandGenre").value = "";

    alert(`${bandName} has been added!`);
}

// Function to display all bands
function displayBands() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    if (bands.length === 0) {
        outputDiv.innerHTML = "<p>No bands to display.</p>";
        return;
    }

    bands.forEach((band, index) => {
        const bandInfo = `<p><strong>${index + 1}. ${band.display()}</strong></p>`;
        outputDiv.innerHTML += bandInfo;
    });
}

// Display predefined bands automatically when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayBands();
});

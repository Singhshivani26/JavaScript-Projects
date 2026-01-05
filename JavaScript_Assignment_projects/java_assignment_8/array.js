// Part 1: Favorite Bands
const artists = ["Coldplay", "Imagine Dragons", "Taylor Swift", "Adele", "Ed Sheeran"];

const userBand = prompt("What is your favorite band?");
if (artists.some(artist => artist.toLowerCase() === userBand.toLowerCase())) {
    alert("That’s one of my favorites, too.");
} else {
    alert("Sorry, not a favorite of mine.");
}

// Part 2: Integer Operations
const myIntegers = [];
let userInput;

while (true) {
    userInput = prompt("Enter an integer (or type 'xxx' to finish):");

    if (userInput.toLowerCase() === 'xxx') {
        break;
    }

    const number = parseInt(userInput);
    if (!isNaN(number)) {
        myIntegers.push(number);
    } else {
        alert("Please enter a valid integer.");
    }
}

if (myIntegers.length > 0) {
    const sum = myIntegers.reduce((acc, num) => acc + num, 0);
    const product = myIntegers.reduce((acc, num) => acc * num, 1);
    const average = sum / myIntegers.length;

    alert(`Summary:\nSum: ${sum}\nAverage: ${average.toFixed(2)}\nProduct: ${product}`);
} else {
    alert("No integers entered.");
}

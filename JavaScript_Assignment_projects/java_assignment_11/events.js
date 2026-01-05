// Select the button using its ID
var button = document.getElementById("my-button");

// Add a click event listener to the button
button.addEventListener("click", function () {
    alert("Button was clicked!");
});

// Additional event examples
button.addEventListener("mouseover", function () {
    console.log("Mouse is over the button!");
});

button.addEventListener("mouseout", function () {
    console.log("Mouse has left the button!");
});

document.addEventListener("keyup", function (event) {
    console.log(`Key pressed: ${event.key}`);
});

// Get references to DOM elements
const inputString = document.getElementById("inputString");
const result = document.getElementById("result");

// Define event listeners for buttons
document.getElementById("uppercase").addEventListener("click", () => {
    result.value = inputString.value.toUpperCase();
});

document.getElementById("lowercase").addEventListener("click", () => {
    result.value = inputString.value.toLowerCase();
});

document.getElementById("trim").addEventListener("click", () => {
    result.value = inputString.value.trim();
});

document.getElementById("reverse").addEventListener("click", () => {
    result.value = inputString.value.split("").reverse().join("");
});

document.getElementById("charCount").addEventListener("click", () => {
    result.value = `Character count: ${inputString.value.length}`;
});

document.getElementById("reset").addEventListener("click", () => {
    inputString.value = "";
    result.value = "";
});

// 1) Create an element and append it to the body
const newDiv = document.createElement("div");
newDiv.innerHTML = "Hello World!";
newDiv.classList.add("new-div");
document.body.appendChild(newDiv);

// 2) Modify an existing element (with id 'existing-div')
const existingDiv = document.getElementById("existing-div");
existingDiv.innerHTML = "New Text for the Existing Div";

// 3) Remove an existing element (with id 'existing-div') after 3 seconds
setTimeout(() => {
    document.body.removeChild(existingDiv);
}, 3000);  // Removes after 3 seconds

// 4) Add an event listener to the newly created div
newDiv.addEventListener("click", () => {
    alert("You clicked the new div!");
});

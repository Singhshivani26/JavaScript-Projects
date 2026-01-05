// DOM References
const form = document.getElementById("madLibsForm");
const modal = document.getElementById("storyModal");
const modalOverlay = document.getElementById("modalOverlay");
const storyText = document.getElementById("storyText");
const closeModal = document.getElementById("closeModal");
const savedStoriesList = document.getElementById("savedStoriesList");

// Event Listener for Form Submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get values from inputs
    const noun = document.getElementById("noun").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const adverb = document.getElementById("adverb").value.trim();

    // Validate inputs
    if (!noun || !verb || !adjective || !adverb) {
        alert("Please fill in all fields!");
        return;
    }

    // Generate story using template literals
    const story = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb} ${adverb}. It became the talk of the town!`;

    // Display story in modal
    storyText.textContent = story;
    modal.style.display = "block";
    modalOverlay.style.display = "block";

    // Save story to local storage
    saveStory(story);
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});

// Save Story Function
function saveStory(story) {
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];
    savedStories.push(story);
    localStorage.setItem("stories", JSON.stringify(savedStories));
    displaySavedStories();
}

// Display Saved Stories
function displaySavedStories() {
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];
    savedStoriesList.innerHTML = "";
    savedStories.forEach((story, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${story}`;
        savedStoriesList.appendChild(listItem);
    });
}

// Load Saved Stories on Page Load
document.addEventListener("DOMContentLoaded", displaySavedStories);

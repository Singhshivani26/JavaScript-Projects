// Initialize the events array and get data from localStorage
let events = JSON.parse(localStorage.getItem("events")) || [];

// Add event listener for the event form
const eventForm = document.getElementById("event-form");
const eventList = document.getElementById("event-list");
const searchButton = document.getElementById("search-btn");

eventForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventTime = document.getElementById("event-time").value;
    const eventLocation = document.getElementById("event-location").value;
    const eventNotes = document.getElementById("event-notes").value;

    // Add new event to the events array
    const newEvent = {
        id: Date.now(),
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        notes: eventNotes,
        coordinates: [51.505, -0.09] // Default location (you can later improve it with geolocation)
    };

    events.push(newEvent);
    saveEvents();
    renderEvents();
    eventForm.reset();
});

// Save events to LocalStorage
function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

// Render events to the list
function renderEvents(eventsToRender = events) {
    eventList.innerHTML = "";

    eventsToRender.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${event.name}</strong><br>
                Date: ${event.date} | Time: ${event.time} | Location: ${event.location}<br>
                <span>${event.notes}</span>
            </div>
            <div>
                <button onclick="deleteEvent(${event.id})">Delete</button>
                <button onclick="editEvent(${event.id})">Edit</button>
                <button onclick="showOnMap(${event.id})">Show on Map</button>
            </div>
        `;
        eventList.appendChild(li);
    });
}

// Delete an event
function deleteEvent(eventId) {
    events = events.filter(event => event.id !== eventId);
    saveEvents();
    renderEvents();
}

// Edit an event
function editEvent(eventId) {
    const eventToEdit = events.find(event => event.id === eventId);
    document.getElementById("event-name").value = eventToEdit.name;
    document.getElementById("event-date").value = eventToEdit.date;
    document.getElementById("event-time").value = eventToEdit.time;
    document.getElementById("event-location").value = eventToEdit.location;
    document.getElementById("event-notes").value = eventToEdit.notes;

    // Remove the event and allow editing
    deleteEvent(eventId);
}

// Search events
searchButton.addEventListener("click", function() {
    const nameSearch = document.getElementById("search-name").value.toLowerCase();
    const dateSearch = document.getElementById("search-date").value;
    const locationSearch = document.getElementById("search-location").value.toLowerCase();

    const filteredEvents = events.filter(event => {
        return (
            event.name.toLowerCase().includes(nameSearch) &&
            (!dateSearch || event.date === dateSearch) &&
            event.location.toLowerCase().includes(locationSearch)
        );
    });

    renderEvents(filteredEvents);
});

// Show the event location on the map
function showOnMap(eventId) {
    const event = events.find(event => event.id === eventId);

    // Initialize Leaflet map
    const map = L.map('map').setView(event.coordinates, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker for the event
    L.marker(event.coordinates).addTo(map)
        .bindPopup(`<b>${event.name}</b><br>${event.location}`)
        .openPopup();
}

// Initial rendering of events
renderEvents();

// Make the map responsive
window.addEventListener('resize', function() {
    const map = L.map('map').invalidateSize();
});

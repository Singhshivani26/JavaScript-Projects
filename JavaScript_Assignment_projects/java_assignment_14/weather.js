const API_KEY = "a9ca332b50dcf7af1ac852cee35d109b"; 

// Function to fetch weather data
async function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message); // Handle errors (e.g., city not found)
        }

        displayWeatherData(data);
    } catch (error) {
        document.getElementById("weather-info").innerHTML = '<p style="color: red;">Error: ${error.message}</p>';
    }
}

// Function to display weather data on the page
function displayWeatherData(data) {
    const weatherInfo = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    document.getElementById("weather-info").innerHTML = weatherInfo;
}

// Add event listener to the button
document.getElementById("fetch-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        document.getElementById("weather-info").innerHTML = `
            <p style="color: red;">Please enter a valid city name.</p>
        `;
    }
});

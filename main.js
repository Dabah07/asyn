// script.js

// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    const apiKey = "your_api_key_here"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const weatherData = await response.json();
        displayWeatherData(weatherData);
    } catch (error) {
        displayError(error.message);
    }
}

// Display weather data in the HTML
function displayWeatherData(data) {
    const weatherDisplay = document.getElementById("weather-display");
    weatherDisplay.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}

// Display error messages
function displayError(message) {
    const weatherDisplay = document.getElementById("weather-display");
    weatherDisplay.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

// Event listener for the button
document.getElementById("fetch-weather").addEventListener("click", () => {
    const cityInput = document.getElementById("city-input").value;
    if (cityInput) {
        getWeatherData(cityInput);
    } else {
        displayError("Please enter a city name");
    }
});

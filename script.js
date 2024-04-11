const apiKey = 'a661bec9174d1993bf224227e7fe4c68';
const latitude = '43.7315';
const longitude = '79.7624';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

const weatherInfo = document.getElementById('weather-info');

// Fetch weather data from OpenWeatherMap API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Extract relevant weather information
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display weather information on the page
        weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
        weatherInfo.textContent = 'Failed to fetch weather data. Please try again later.';
    });

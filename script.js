document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.wind.speed} km/h`;
            document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

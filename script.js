document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Замените на ваш API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weatherIcon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('cityName').innerText = data.name;
            document.querySelector('.weather-info').style.display = 'block';
        })
        .catch(error => {
            alert('City not found. Please try again.');
        });
});
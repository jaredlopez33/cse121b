
document.getElementById('submitButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab50923eba66fc4dd7f340f557465c6`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = Math.round(data.main.temp - 273.15);
            const weatherDescription = data.weather[0].description;
            weatherInfo.innerHTML = `Climate in ${city}: ${temperature}°C, ${weatherDescription}`;

            fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=LqOX1FFu6SeEAdigX16fq7LfkThXxrNUdi1accJYXTQ`)
            .then(response => response.json())
            .then(imageData => {
                const imageUrl = imageData.results[0].urls.regular;
                const cityImage = document.getElementById('cityImage');
                cityImage.src = imageUrl;
                cityImage.alt = `Image of ${city}`;
            })
            .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
    }
});
let weatherForm = document.getElementById('WeatherInput');
weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Function Called');
});
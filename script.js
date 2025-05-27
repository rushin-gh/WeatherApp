let weatherForm = document.getElementById('weatherInput');
let cityInput = document.getElementById('weatherCity');
let cityDetails = document.getElementById('cityDetails');

weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let city = cityInput.value;
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&appid=c36510620929164579f6f461e592c3b6`;
    
    fetch(url)
    .then(resp => {
        if (!resp.ok) {
            alert('Network issue');
        }
        return resp.json();
    })
    .then(data => {
        if (data.length) {
            let details = data[0];
            console.table([details["name"], details["state"], details["country"], details["lat"], details["lon"]]);
            cityDetails.innerHTML = 
            `
                name: ${details["name"]} <br/>
                state: ${details["state"]} <br/>
                country: ${details["country"]} <br/>
                lattitude: ${details["lat"]} <br/>
                longitude: ${details["lon"]} <br/>
            `;
        }
        else {
            console.log(`City ${city} doesn't exist!`);
            cityDetails.innerHTML = `Invalid city`;
        }
    });
})
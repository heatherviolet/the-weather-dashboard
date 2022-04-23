var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("cityName");


// request weather data from openweather API
var getCity = function() {
    var apiKey = "7b82dad76c0454a41390ac5b36cbf36e"
    var cityName = cityInput.value
    console.log("cityName", cityName);
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};


searchBtn.addEventListener("click", getCity);
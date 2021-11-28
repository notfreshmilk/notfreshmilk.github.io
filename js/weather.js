const API_KEY = "b01122b9aa42f919884bdee133506c27";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        //const weatherContainer = document.querySelector("weather_view");
        const city = document.querySelector("#weather_view > dt");
        const weather = document.querySelector("#weather_view > dd");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    })
}

function onGeoError(){
    console.log('Error get geo')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

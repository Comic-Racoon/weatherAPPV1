let locationTimezone = document.getElementById("location-timezone");
let temperatureDegree = document.getElementById("temperature-degree");
let temperatureDescription = document.getElementById("temperature-description");
let weatherIcon = document.getElementById("weather-icon");
let topContainer = document.getElementById("change-bg");

window.addEventListener('load', ()=> {
    let lat;
    let log;

    const proxy = "https://cors-anywhere.herokuapp.com/"
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>{
            lat = position.coords.latitude;
            log = position.coords.longitude;

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=47e6898e48fe200a43423c54d1a7b3d1`;

            fetch(api).then((response) => {
                return response.json();
            })
            .then (data => {
                console.log(data);
                const {name} = data;
                const {temp} = data.main;
                const {icon, description} = data.weather[0];

                locationTimezone.textContent = name;
                temperatureDegree.textContent = temp;
            
                weatherIcon.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@4x.png">`;
                temperatureDescription.textContent = description;

                 topContainer.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
                // topContainer.style.backgroundColor = 'black';
            
            })
            
        })
    }
})

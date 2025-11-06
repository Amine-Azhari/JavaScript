const apiKey = "ff07bae102ca333d5a7914634f757558";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.getElementById("search").onclick = function(){
    cityName = document.getElementById("input").value;
    checkWeather(cityName);
}

function icon(temp, humidity, windSpeed){
    if (temp>=25 && windSpeed<10) return "clear";
    else if (humidity >80) return "rain";
    else if (temp<=0) return "snow";
    else if (humidity>60) return "drizzle";
    else return "mist";
}

async function checkWeather(city) {
    let temp = apiUrl + city
    const response = await fetch(temp + `&appid=${apiKey}`);
    let data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".weather-icon").src = `images/${icon(Math.round(data.main.temp), data.main.humidity, data.wind.speed)}.png`;
}





let userInput = document.getElementById("userInput")
let weatherIcon= document.querySelector(".weather-icon")

let apiKey = "26ee2838c899f5574d05ca6ba36288d2";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)

    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" Km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="./images/clouds.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="./images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src ="./images/snow.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="./images/clear.png"
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src ="./images/thunderstorm.png"
    }



}



function searchCity(){
    checkWeather(userInput.value)
}
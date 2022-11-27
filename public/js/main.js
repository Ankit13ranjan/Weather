const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal === ''){
        city_name.innerText = "Please Enter City Name."
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6e9680135a5623910e9bc408302ab79e`;
            const response = await fetch(url);
            const data = await response.json();
            const resData = [data];

            city_name.innerText = `${resData[0].name} , ${resData[0].sys.country}`;
            temp.innerText = resData[0].main.temp;
            windSpeed.innerText = resData[0].wind.speed;
            weather.innerText = resData[0].weather[0].main;
            pressure.innerText = resData[0].main.pressure;
            min_temp.innerText = resData[0].main.temp_min;
            max_temp.innerText = resData[0].main.temp_max;

        }
        catch{
            city_name.innerText = "Enter Valid Place."
        }
    }
}

submitBtn.addEventListener('click',getInfo);
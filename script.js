const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const description=document.querySelector(".description");

const wind=document.querySelector(".wind");
const location_not_found= document.querySelector(".location_not_found");
const weather=document.querySelector(".weather");

 async  function checkWeather(city){
    const apiKey="e95887299da956b691a9e33312762e8d";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   
    const weather_data =  await fetch(`${apiUrl}`).then(response => response.json());
    console.log(weather_data);

       if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather.style.display="none";
        console.log("error");
        return;
       }
       weather.style.display="flex";
       location_not_found.style.display = "none";

       temp.innerHTML=`${Math.round(weather_data.main.temp - 273.15)} °C`;
       humidity.innerHTML=`${weather_data.main.humidity}%`;
       wind.innerHTML=`${weather_data.wind.speed}km/hr`;
       description.innerHTML=`${weather_data.weather[0].description}`;
       
    
       switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherIcon.src= "Img/clouds.png";
                break;
            case 'Clear':
                weatherIcon.src= "Img/clear.png";
                break;
            case 'Mist':
                weatherIcon.src= "Img/mist.png";
                break;
            case 'Rain':
                   weatherIcon.src= "Img/rain.png";
                break;
            case 'Snow':
                  weatherIcon.src="Img/snow.png";
                 break;
            case 'Drizzle':
            weatherIcon.src="Img/drizzle.png";
                 break;

       }
       weather.style.display = "block";

       
    }


searchBtn.addEventListener('click',()=>{

    checkWeather(searchBox.value);
})
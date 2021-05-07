const form = document.querySelector('form');
const details = document.querySelector('.details');
const background = document.querySelector('body');


const updateUI = (data) => {

    const cityDeets = data.cityDeets;
    const weather = data.weather;

    if(weather.IsDayTime == false) {
        background.style='background-color:0B1026';
    } else {
        background.style='background-color:#87ceeb';
    }


    details.innerHTML = `<div class="details">
    <div class="date date-style">
        <h3>${cityDeets.EnglishName}, ${cityDeets.Country.ID}</h3>
    </div>
    <div class="weather weather-style">
    <img class="icon-style" src="icons/${weather.WeatherIcon}.svg" alt="">
        <h4>${weather.WeatherText}</h4>
    </div>
    <div class="temp temp-style">
      <h4><span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span></h4>
    </div>
   </div>`
}

const updateCity = async (city) => {

    const cityDeets = await getCity(city);
    const weather =  await getWeather(cityDeets.Key);

    return { cityDeets, weather };
}


form.addEventListener('submit', e => {
    e.preventDefault();


  const city = form.city.value.trim();

  form.reset();


updateCity(city)
.then(data => console.log(data))
.catch(err => console.log(err));
});
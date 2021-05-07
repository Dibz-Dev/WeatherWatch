const key = '2h5CaSiodwsjbpHf5Eiv1ZFzgNkAH3ed';

const getWeather = async (id) => {

    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;

    const response = await fetch(baseUrl + query);

    const data = await response.json();
    
    return data[0];
}




const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch( baseUrl + query);

    const data = await response.json();

    return data[0];

}
// getCity('london').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));


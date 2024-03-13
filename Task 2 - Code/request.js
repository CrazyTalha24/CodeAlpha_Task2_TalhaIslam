const key = '89bc450ce06954dc81d3aacb98d15686';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=89bc450ce06954dc81d3aacb98d15686';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
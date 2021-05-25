const key = '96d4d3fc';

const apiWeather = (city, state) => fetch(`https://api.hgbrasil.com/weather?key=${key}&city_name=${city},${state}`)
  .then((resp) => resp.json())
  .then((data) => data);

export default apiWeather;

const response = await fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5'); //získání dat z API
const data = await response.json();

const sunset = data.results.sunset;

const sunrise = data.results.sunrise;

console.log(data); 

document.body.innerHTML = `
    <p>Východ slunce: ${sunrise}</p>
    <p>Západ slunce: ${sunset}</p>
  `;

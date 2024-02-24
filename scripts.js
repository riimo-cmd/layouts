

const Weather = document.getElementById("weather");

function getWeather() {
  if (navigator.geolocation) {
    Weather.innerHTML = properties.periods.temperature; + properties.periods.temperatureUnit;
  } else {
    Weather.innerHTML = "Something went wrong... orz";
  }
}
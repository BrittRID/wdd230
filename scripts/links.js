const baseURL = "https://brittrid.github.io/wdd230/";
const linksURL = "https://brittrid.github.io/wdd230/data/links.json";

const apiKey = "YOUR_API_KEY";
const location = "YOUR_LOCATION";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Process the weather data here
  })
  .catch(error => {
    console.log("Error fetching weather data:", error);
  });
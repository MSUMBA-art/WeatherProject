const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); // install body-parser using npm in the terminal

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // this is how we use body-parser

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); // this will fetch file from html code
});

app.post("/", function(req, res) {

    const query = req.body.cityName; // city name will concanate query in the url
    const apiKey = "cab38482ff42bfe2e937fb9afa90c848"; // this is api key will concanated in the url 
    const unit = "metric"; // this is the unit in which weather will be calculated
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode); // always include status code

        // THE BELLOW FUNCTION IS A RESPONSE
         response.on("data", function(data) {
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp //give temperature from the json
        const weatherDescription = weatherData.weather[0].description // weather description
        const icon = weatherData.weather[0].icon //weather icon e.g sunny, clowdy etc
        const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png" // took the icon from weather.org
        res.write("<p>The weather is currently " + weatherDescription + "." + "</p>"); //it will write weather description
        res.write("<img src=" + imageUrl + ">")
        res.write("<h1> The temperature in " + query + " is " + temp + " Degress Celcius.</h1>");
        
        res.send()
         });
    });

    })

    
  




app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});

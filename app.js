const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    console.log(req.body.cityName);

    // const query = "London";
//     const apiKey = "cab38482ff42bfe2e937fb9afa90c848";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric";
//     https.get(url, function(response) {
//         console.log(response.statusCode);

//          response.on("data", function(data) {
//         const weatherData = JSON.parse(data)
//         const temp = weatherData.main.temp
//         const weatherDescription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//         res.write("<p>The weather is currently " + weatherDescription + "." + "</p>");
//         res.write("<h1> The temperature in Cape Town is " + temp + " Degress Celcius.</h1>");
//         res.write("<img src=" + imageUrl + ">")
//         res.send()
//          });
//     });
  
});



app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});

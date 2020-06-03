const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.get("/css/owl.carousel.css", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/css/owl.carousel.css");
});

app.get("/css/bootstrap-3.1.1.min.css", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/css/bootstrap-3.1.1.min.css");
});

app.get("/css/style.css", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/css/style.css");
});

app.get("/about", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/about.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.listen(3000);
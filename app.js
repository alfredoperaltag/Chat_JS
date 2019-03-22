const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + "/public"));

http.listen(3000, function () {
    console.log("el servidor iniciado")
})
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.end("mi chat iniciado");
});

app.listen(3000, function () {
    console.log("el servidor iniciado")
})
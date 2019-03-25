const io = require('socket.io');
module.exports = function (server) {
    var sockets = io.listen(server);

    sockets.on('connection', function (socket) {
        console.log("nuevo cliente");
        /* prueba*/
        socket.on('mensaje-del-cliente', function (data) {
            sockets.emit('mensaje-del-servidor', data);
        });
    });
}
const path = require('path');
const http = require('http');
const express = require('express');

//Config Servidor

const app = express();
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);
var io = require('socket.io')(server);

server.listen(PORT, () => console.log('Server running on '+ PORT ));

app.use(express.static(path.join(__dirname, 'public')));


//WebSocket

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})



const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', scoket => {
    console.log('New Connection')
    socket.emit('message', 'Welcome')
})


app.listen(PORT, () => console.log('Server running on '+ PORT ));
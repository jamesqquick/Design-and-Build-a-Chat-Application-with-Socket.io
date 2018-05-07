const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

//Serve public directory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
	console.log('a user connected');
});

http.listen(3000, () => {
	console.log('listening on port 3000');
});

"use strict";
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var cors = require('cors');
var game_socket = require('./routes/sockets/game_socket/game_socket');
var corsOptions = {};
app.use(cors(corsOptions));
//Import Routes
var authRoute = require('./routes/auth');
var postRoute = require('./routes/posts');
var gameRoute = require('./routes/games/games');
dotenv.config();
//Connect to db
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, function () {
    console.log('connected');
});
app.use(express.json());
//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/games', gameRoute);
server.listen(3000, function () { console.log("Server is up and running"); });
var io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:4200',
        method: ["GET", "POST"]
    }
});
game_socket(io);

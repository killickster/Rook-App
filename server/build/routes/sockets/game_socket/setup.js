"use strict";
/*
This code is to get the socket working independently of the server code.

This is used for testing purposes to debug the game logic while it
interfaces with the files in game_socket_tests
*/
var game_socket = require('./game_socket');
var PORT = 6000;
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
game_socket(io);
server.listen(PORT, function () {
    console.log('test server running on port: ' + PORT);
});

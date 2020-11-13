/*
This code is to get the socket working independently of the server code.

This is used for testing purposes to debug the game logic while it 
interfaces with the files in game_socket_tests
*/

const Player = require('../../../model/game/Player')
const game_socket = require('./game_socket')
const PORT = 6000
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

game_socket(io)


server.listen(PORT, () => {
    console.log('test server running on port: ' + PORT)
})





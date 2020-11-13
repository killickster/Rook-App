
const io = require('socket.io-client')
const PORT = 6000

socketFactory = async (io,name) => {

    console.log(name + " joining game")
    let socket = await io.connect("http://localhost:" + PORT + '/games/socket')

    socket.on('connected', ()=> {
        console.log('socket is connected')

        socket.emit('join_game', {player_id: name , game_id:"rook_game"})

    })

    socket.on('success', (msg)=> {

        console.log(msg)

    })

    socket.on('new_player', (msg) => {
        console.log(msg)

    })

    socket.on('declined', (msg) => {
        console.log(msg)
    })

    return socket


}

names = ['loins', 'johnson', 'dick', 'yenis', 'genis', 'dick ho']
sockets = []

let socket = io.connect("http://localhost:" + PORT + '/games/socket')


socket.on('connected', ()=> {
    console.log('socket is connected')

    socket.emit('initalize_game', {player_id: 'nathan', game_id:"rook_game"})

})

socket.on('success', (msg)=> {

    console.log(msg)

})

socket.on('new_player', (msg) => {
    console.log(msg)

})

socket.on('declined', (msg) => {
    console.log(msg)
})

for(let name of names){

    sockets.push(socketFactory(io, name))
    
}





const io = require('socket.io-client')
const PORT = 6000
bid = 80

socketFactory = async (io,name, timeout) => {

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


    socket.on('game_ready', (msg) => {
        setTimeout(() => {
            socket.emit('get_cards', {player_id: name, game_id:'rook_game'}, (msg) => {
        }, timeout)
        })
    })


    socket.on('cards',(cards) => {
        console.log(cards)

        setTimeout(() => {
            socket.emit('check_turn', {player_id: name, game_id:'rook_game'}, (msg) => {
                        console.log(msg)
                    })
            },timeout)
    } )

    socket.on('bid_request', () => {
        console.log('bidding ' + name)
        socket.emit('bid_submit', {player_id: name, game_id: 'rook_game', bid: bid+=5})
    })

    socket.on('bid', (bid) => {
        console.log(bid)
        if(name === bid.player){
            console.log('wierd')
        }
            socket.emit('check_turn', {player_id: name, game_id:'rook_game'}, (msg) => {
                        console.log(msg)
                    })
    })

    socket.on('')

    return socket


}

names = ['loins', 'johnson', 'dick', 'yenis', 'genis', 'dick ho']
sockets = []
timeouts = [1000, 2000,3000,4000,5000]
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

socket.on('game_ready', (msg) => {
    console.log(msg)

   socket.emit('get_cards', {player_id: 'nathan', game_id:'rook_game'}, (msg) => {
        console.log(msg)
    })
})

socket.on('cards',(cards) => {
    console.log(cards)

        setTimeout(() => {
        socket.emit('check_turn', {player_id: 'nathan', game_id:'rook_game'}, (msg) => {
                    console.log(msg)
                })
        },1000)

} )

socket.on('bid_request', () => {
    console.log('bidding ' + 'nathan')
    setTimeout(() => {
        socket.emit('bid_submit', {player_id: 'nathan', game_id: 'rook_game', bid: bid += 5})
    }, 2000)

})

socket.on('bid', (bid) => {
    console.log(bid)
    
    setTimeout(() => {
        socket.emit('check_turn', {player_id: 'nathan', game_id:'rook_game'}, (msg) => {
                    console.log(msg)
                })
        },5000)
})

var i = 0
for(let name of names){

    sockets.push(socketFactory(io, name, timeouts[i]))
    i++    
    if(i >= timeouts.length){
        i = 0
    }
}




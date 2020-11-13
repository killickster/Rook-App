const Game = require('../../../model/game/Game')
const Player = require('../../../model/game/Player')


const games = []



module.exports = function(io){
    io.of('/games/socket').on('connection', (socket) => {
        console.log('connected')

        socket.emit('connected')

        socket.on('initalize_game', async (game_data) => {

            const {player_id, game_id} = game_data
            //query database to see if player exists
            //get player_name from database

            //Check database for game

            
            var game = await games.find(g => {
                return g.id === game_id
            })

            if(game){
                socket.emit('declined', "this game already exists")
            }else{

                const game = await new Game(game_id)             //player_id will be replaced by player_name
                games.push(game)
                game.addPlayer(new Player(player_id, player_id))

                socket.join(game_id)

                io.of('games/socket').in(game_id).emit("new_player", `Player ${player_id} has created game ${game_id}`)

                return socket.emit("success", "game is created")
            }



        })

        socket.on('join_game', async (request_data) => {

            const {player_id, game_id} = request_data

            //query database to see if player exists
            //get player_name from database

            //Check database for game
            var game = await games.find(g => {
                return g.id === game_id
            })

            if(!game){

                return socket.emit("declined", "no such game")
            }

            var gameFull = game.players.length === game.numberOfPlayers

            if(gameFull){
                return socket.emit("declined", "this room is full")
            }

            var containsPlayer = await game.players.find(p => {return p.id === player_id})
            console.log(containsPlayer)
            if(containsPlayer){
                console.log('rejected')

                return socket.emit("declined", "this player is already in the game")
            }else{

                await game.addPlayer(new Player(player_id, player_id))

                socket.join(game_id)

                console.log('new player joined')

                io.of('games/socket').in(game_id).emit("new_player", `Player ${player_id} has joined game ${game_id}`)

                return socket.emit("success", "you were added to the game")
            }


        })


        
    })

}

const Game = require('../../../model/game/Game')
const Player = require('../../../model/game/Player')
const GameSchema = require('../../../model/Game')






module.exports = function(io){

    var games = []


    io.on('connection', (socket) => {

        console.log('hello')


        socket.on('initalize_game', async (game_data) => {

            const {player_id, game_id} = game_data
            //query database to see if player exists
            //get player_name from database

            //Check database for game
            var game_from_database = GameSchema.findOne({_id: game_id})
            
            var game = await games.find(g => {
                return g.id === game_id
            })



            if(game){
                socket.emit('declined', "this game already exists")
            }else{

                const game = await new Game(game_from_database._id)
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

                if(game.players.length === game.numberOfPlayers){

                    game.formTeams()

                    console.log('game')
                    io.of('games/socket').in(game_id).emit("game_ready", {team1: game.team1, team2: game.team2})

                    game.deal(5)
                }

                return socket.emit("success", "you were added to the game")
            }


        })


        socket.on('get_cards', async (request_data) => {

            const {player_id, game_id} = request_data


            var game = await games.find(g => {
                return g.id === game_id
            })

            const player = await game.players.find(player => {
                return player.id === player_id
            })

            socket.emit("cards", {"hand": player.hand})

            
            if(player_id === game.currentBidder.id){
                return socket.emit('bid_request')
            }else{
                return socket.emit('not_your_turn')
            }

        })

        socket.on('bid_submit', async (request_data) => {

            console.log('requesting bid')

            const {player_id, game_id, bid} = request_data

            console.log('bid: ' + bid)

            var game = await games.find(g => {
                return g.id === game_id
            })

            const player = await game.players.find(player => {
                return player.id === player_id
            })

            game.submitBid(player.id, bid)

            socket.to(game_id).emit("bid", {bid : bid, player: player.name})

            return socket.emit('bid_submitted')

        })

        socket.on('check_turn', async (request_data) => {

            console.log('checking turn')
            const {player_id, game_id} = request_data

            var game = await games.find(g => {
                return g.id === game_id
            })


            const player = await game.players.find(p=> {
                return p.id === player_id
            })

            if(player.id === game.currentBidder.id){
                console.log('your turn')
                return socket.emit('bid_request')
            }else{
                console.log('not your turn')
                return socket.emit('not_your_turn')
            }

        })
    })



}

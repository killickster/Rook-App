const Game = require('../../../model/game/Game')
const Player = require('../../../model/game/Player')
const GameSchema = require('../../../model/Game')
const User =require('../../../model/User')




var games = []


module.exports = function(io){



    console.log('running')


    io.of('/games/socket').on('connection', (socket) => {

        console.log('hey')



        socket.on('initalize_game', async (game_data) => {

            console.log('game init')

            const {player_id, game_id} = game_data
            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
            var game_from_database = GameSchema.findOne({_id: game_id})
            
            var game = await games.find(g => {
                return g.id === game_id
            })



            if(game){
                socket.emit('declined', "this game already exists")
            }else{

                const game = await new Game(game_id)
                games.push(game)
                console.log('addin game')
                game.addPlayer(new Player(player_id,user.name))

                socket.join(game_id)



                return socket.emit("success", "game is created")
            }



        })

        socket.on('join_game', async (request_data) => {

            const {player_id, game_id} = request_data

            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
             console.log(games)
            var game = await games.find(g => {
                return g.id === game_id
            })

            if(!game){
                console.log('no such game')
                return socket.emit("declined", "no such game")
            }

            var gameFull = game.players.length === game.numberOfPlayers

            if(gameFull){
                console.log('game full')
                return socket.emit("declined", "this room is full")
            }

            var containsPlayer = await game.players.find(p => {return p.id === player_id})
            console.log(containsPlayer)
            if(containsPlayer){
                console.log('rejected')

                return socket.emit("declined", "this player is already in the game")
            }else{

                await game.addPlayer(new Player(player_id,user.name))

                socket.join(game_id)

                console.log('new player joined')

                io.of('games/socket').to(game_id).emit("new_player", {playerName: user.name})

                if(game.players.length === game.numberOfPlayers){

                    game.formTeams()

                    console.log('game')

                    var team1 = game.team1.map(player => {
                        return player.name
                    })

                    var team2 = game.team2.map(player => {
                        return player.name
                    })
                    console.log(team1)
                    console.log(team2)


                    game.deal(5)

                    io.of('games/socket').in(game_id).emit("game_ready", {team1: team1, team2: team2})

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

            const {player_id, game_id, bid} = request_data


            var game = await games.find(g => {
                return g.id === game_id
            })

            const player = await game.players.find(player => {
                return player.id === player_id
            })

            var bidWinner = game.submitBid(player.id, +bid)


            if(bidWinner){
                console.log(bidWinner)
                console.log('has won')
            }


            if(!game.bidFinished){
                socket.to(game_id).emit("bid", {bid : game.currentBid, player: player.name, nextBidder: game.currentBidder.id})
            }else{
                socket.to(game_id).emit("bid_completed", {id: bidWinner.id})
            }

            return socket.emit('bid_submitted')

        })


        socket.on('get_kitty', async (request_data) => {

            const {player_id, game_id} = request_data

            var game = await games.find(g => {
                return g.id === game_id
            })


            const player = await game.players.find(p=> {
                return p.id === player_id
            })

            if(game.bidWinner.id === player.id){
                console.log('sending kitty')
                socket.emit('kitty', {cards: game.kitty})
            }

        })


        socket.on('decide_trump', async (request_data) => {

            const {player_id, game_id, trump_color} = request_data

            var game = await games.find(g => {
                return g.id === game_id
            })

            const player = await game.players.find(p=> {
                return p.id === player_id
            })

            if(player_id === game.bidWinner.id){

                //game.decideTrump(trump_color)

                socket.emit('please_lead')

                //game.beginTrick(player)
            }
        })







    })



}
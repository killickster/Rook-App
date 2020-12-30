const {Game, Player, Play, MoveType} = require('../../../model/game/Game')
const GameSchema = require('../../../model/Game')
const User =require('../../../model/User')




var games = []


module.exports = function(io){



    console.log('running')


    io.of('/games/socket').on('connection', (socket) => {

        console.log('hey')

        socket.on('get_game_state', async (game_data) => {

            console.log('joinin game')
            const {player_id, game_id} = game_data 

            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
             console.log(games)
            var game = await games.find(g => {
                console.log(g.game_id)
                return g.game_id === game_id
            })

            if(!game){
                console.log('no such game')
                return socket.emit("declined", "no such game")
            }

            var matches = game.players.filter(player => {
                if(player === null){
                    return false
                }else{
                    return (player.player_id === player_id)
                }
            })

            console.log(matches)
            if(matches.length > 0){
                console.log('rejected')

                return socket.emit("declined", "this player is already in the game")
            }else{

                if(game.numberOfPlayersJoined < game.numberOfPlayers){

                    var gameState = await game.move(new Play(MoveType.ADD_PLAYER, player_id, new Player(player_id, user.name)))

                    socket.join(game_id)

                    console.log('new player joined')

                    io.of('games/socket').to(game_id).emit("updated_game_state", gameState)
                }


                return socket.emit("success", "you were added to the game")
            }

        })



        socket.on('initalize_game', async (game_data) => {

            console.log('game init')

            const {player_id, game_id} = game_data
            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
            var game_from_database = await GameSchema.findOne({_id: game_id})
            
            var game = await games.find(g => {
                return g.id === game_id
            })



            if(game){
                socket.emit('declined', "this game already exists")
            }else{

                const game = new Game(game_id, game_from_database.numberOfPlayers)

                console.log(game)
                games.push(game)

                var gameState = game.move(new Play(MoveType.ADD_PLAYER, player_id, new Player(player_id, user.name)))

                socket.join(game_id)

                return socket.emit("updated_game_state", gameState)
            }



        })

        socket.on('join_game', async (request_data) => {

            console.log('joinin game')
            const {player_id, game_id} = request_data

            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
             console.log(games)
            var game = await games.find(g => {
                console.log(g.game_id)
                return g.game_id === game_id
            })

            if(!game){
                console.log('no such game')
                return socket.emit("declined", "no such game")
            }

            var matches = game.players.filter(player => {
                if(player === null){
                    return false
                }else{
                    return (player.player_id === player_id)
                }
            })

            console.log(matches)
            if(matches.length > 0){
                console.log('rejected')

                return socket.emit("declined", "this player is already in the game")
            }else{

                if(game.numberOfPlayersJoined < game.numberOfPlayers){

                    var gameState = await game.move(new Play(MoveType.ADD_PLAYER, player_id, new Player(player_id, user.name)))

                    socket.join(game_id)

                    console.log('new player joined')

                    io.of('games/socket').to(game_id).emit("updated_game_state", gameState)
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

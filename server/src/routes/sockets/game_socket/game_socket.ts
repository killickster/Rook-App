const {Game, Player, Play, MoveType} = require('../../../model/game/Game')
const GameSchema = require('../../../model/Game')
const User =require('../../../model/User')
const fs = require('fs');




var games: typeof Game[] = []


module.exports = function(io: any){



    console.log('running')


    io.of('/games/socket').on('connection', (socket: any) => {

        socket.on('get_game_state', async (game_data: any) => {

            const {player_id, game_id} = game_data 

            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            //Check database for game
            var game = await games.find(g => {
                return g.game_id === game_id
            })

            if(!game){
                console.log('no such game')
                return socket.emit("declined", "no such game")
            
            }


            if(!socket.rooms.has(game_id)){
                socket.join(game_id)
            }

            var gameState = game.getGameStateFor(player_id)

            socket.emit('game_state',gameState)

        })

        socket.on('play', async (game_data: any) => {


            var play: typeof Play = game_data.play
            var player_id = play.player_id
            var game_id: string = game_data.game_id


            
            //query database to see if player exists
            //get player_name from database
            var user = await User.findOne({_id: player_id})

            if(!user){
                return
            }

            //Check database for game
            var game_from_database = await GameSchema.findOne({_id: game_id})
            


            if(play.moveType === MoveType.INITALIZE_GAME){

                console.log(play)

                const game = new Game(game_id, game_from_database.numberOfPlayers, play.payload.lastTrick, play.payload.mostCards, play.payload.throwOutPoints, game_from_database.pointsToWin)

                games.push(game)

                game.move(new Play(MoveType.ADD_PLAYER, player_id, new Player(player_id, user.name))).then((index: any) => {

                    console.log('initalizing game done')

                    socket.join(game_id)

                    return socket.emit("game_state_changed")

                })


            }else{

                var game = await games.find(g => {
                    return g.game_id === game_id
                })

                if(play.moveType === MoveType.ADD_PLAYER){
                    socket.join(game_id)

                    var play = new Play(play.moveType, play.player_id, new Player(play.payload.player_id, play.payload.player_name))

                    game.move(play).then((index: any) => {

                        console.log('joined game done')

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })

                }else if(play.moveType === MoveType.BID){

                    console.log('bidding')
                   
                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })
                }else if(play.moveType === MoveType.DISCARD){

                    console.log('discarding')

                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })


                }else if(play.moveType === MoveType.SET_TRUMP){

                    console.log('choosing trump')

                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })
                }else if(play.moveType === MoveType.PLAY){
                    console.log('playing')

                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((data: any) => {

                        const {roundDone, gameFinished} = data

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id, finished: gameFinished, roundDone: roundDone})

                    }).catch((error: any) => {
                        fs.writeFile('logs.txt', JSON.stringify(error.gameState), function (err: any) {
                            if (err) return console.log(err);
                        });
                    })

                }else if(play.moveType === MoveType.CORRECTING_MISDEAL){
                    console.log('correcting misdeal')

                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })

                }else if(play.moveType === MoveType.CHOOSE_PARTNER){
                    console.log('Choosing partner')

                    var play = new Play(play.moveType, play.player_id, play.payload)

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })

                }



            }


        })



    socket.on('game_done', async (game_data: any) => {

     const {player_id, game_id} = game_data 

        //query database to see if player exists
        //get player_name from database
        var user = await User.findOne({_id: player_id})

        var game_from_database = await GameSchema.findOne({_id: game_id})

        var game = await games.find(g => {
            return g.game_id === game_id
        })

        //Check database for game
        socket.disconnect()

        if(!game.finished){

            game_from_database.finished = true

            var max = -Infinity

            for(let player of game.players){
                if(player.points > max){
                    max = player.points
                }
            };

            var idsOfWinners = []

            for(let i = 0; i < game.players.length; i++){
                if(game.players[i].points === max){
                    idsOfWinners.push(game.players[i].player_id)
                }
            }

            game_from_database.winners = idsOfWinners
        }

        await game_from_database.save()

    })

        socket.on('message', async (data: any) => {

           
            const {name, user_id, message, game_id} = data

            console.log('message data')
            console.log(data)

            io.of('/games/socket').in(game_id).emit('new_message', {user: name, user_id: user_id, message: message})


        })
    })

    



}

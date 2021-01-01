const {Game, Player, Play, MoveType} = require('../../../model/game/Game')
const GameSchema = require('../../../model/Game')
const User =require('../../../model/User')




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
                const game = new Game(game_id, game_from_database.numberOfPlayers)

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

                    game.move(play).then((index: any) => {

                        return io.of('/games/socket').to(game_id).emit('game_state_changed', {game_id: game_id})
                    })

                }



            }


        })

    })


}

const verifyToken = require('../verifyToken')
const router = require('express').Router()
const GameSchema = require('../../model/Game')
const User = require('../../model/User')
const verifyNotHost = require('../verifyNotHost')
const verifyGame = require('../verifyGame')


router.post('/game', verifyToken, verifyNotHost, async (req,res) => {


    const host = await User.findOne({_id: req.user._id})


    const newGame = new GameSchema({
        host_id: req.user._id,
        host_name: host.name,
        players_id: [req.user._id],
        playerNames: [host.name],
        numberOfPlayers: req.body.numberOfPlayers,
        finished: false
    })

    try{

        const game = await newGame.save()

        const returnGame = {
            hostName: game.host_name,
            id: game._id,
            numberOfPlayers: game.numberOfPlayers,
            playerNames: game.playerNames,
            playerIds: game.players_id
        }


        res.send(returnGame)

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

router.get('/', verifyToken, async (req,res) => {

    const games = await GameSchema.find()

    try{
        let gameReturnObject = games.map(game => {
            return {
                hostName: game.host_name,
                id: game._id,
                numberOfPlayers: game.numberOfPlayers,
                playerNames: game.playerNames,
                playerIds: game.players_id,
                finished: game.finished
            }
        })

        console.log(gameReturnObject)

        res.send(gameReturnObject)
    }catch(err){
       res.status(400).send(err) 
    }
})

router.put('/game', verifyToken, verifyGame, async(req,res) => {

    const game = req.game

    console.log(req.user)


    for(let id of req.game.players_id){
        if(id == req.user._id){
            return res.status(400).send('ALREADY_IN_GAME')
        }
    }

    game.playerNames.push(req.user.name)
    game.players_id.push(req.user._id)

    try{

        const savedGame = await game.save()

        const returnGame = {
            hostName: savedGame.host_name,
            id: savedGame._id,
            numberOfPlayers: savedGame.numberOfPlayers,
            playerNames: savedGame.playerNames,
            playerIds: savedGame.players_id,
            game: savedGame.finished
        }
        console.log(savedGame.playerNames)

        res.send(returnGame)

    }catch(err){
        res.status(400).send(err)
    }
})



module.exports = router
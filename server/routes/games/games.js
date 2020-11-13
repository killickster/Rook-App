const verifyToken = require('../verifyToken')
const router = require('express').Router()
const GameSchema = require('../../model/Game')
const Game = require('../../model/game/Game')
const User = require('../../model/User')
const verifyNotHost = require('../verifyNotHost')

const games = []

router.post('/game', verifyToken, verifyNotHost, async (req,res) => {

    const host = await User.findOne({_id: req.user._id})


    const newGame = new GameSchema({
        host_id: req.user._id,
        players_id: [req.user_id],
    })

    game = new Game(newGame._id)
    games.push(new Game(game))

    try{

        const game = await newGame.save()



        res.send(game)

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

router.get('/', verifyToken, async (req,res) => {

    try{
        const gamesResponse = this.games.map(game => {
            {
                game.getGameForDisplay()
            }
        })
        res.send(gamesResponse)
    }catch(err){
       res.status(400).send(err) 
    }
})




module.exports = router
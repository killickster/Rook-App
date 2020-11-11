const verifyToken = require('../verifyToken')
const router = require('express').Router()
const Game = require('../../model/Game')
const User = require('../../model/User')



router.post('/game', verifyToken, async (req,res) => {

    

    const host = await User.findOne({_id: req.user._id})


    const newGame = new Game({
        host_id: req.user._id,
        host_name: host.name,
        players_id: [],
        playerNames: [],
        numberOfPlayers: req.body.numberOfPlayers 
    })

    try{

        const game = await newGame.save()

        const returnGame = {
                host: game.host_name,
                playerNames: game.playerNames,
                numberOfPlayers: game.numberOfPlayers
            }
        

        res.send(returnGame)

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

router.get('/', verifyToken, async (req,res) => {

    const games = await Game.find()

    const allGames= games.map((game) => {
        return {
            host: game.host_name,
            playerNames: game.playerNames,
            numberOfPlayers: game.numberOfPlayers
        }
    })

    try{
        res.send({allGames})
    }catch(err){
       res.status(400).send(err) 
    }
} )




module.exports = router
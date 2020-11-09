const verifyToken = require('../verifyToken')
const router = require('express').Router()
const Game = require('../../model/Game')
const User = require('../../model/User')



router.post('/game', verifyToken, async (req,res) => {


    const host = await User.findOne({_id: req.user._id})


    const newGame = new Game({
        host: host,
        numberOfPlayers: req.body.numberOfPlayers 
    })




    try{

        const game = await newGame.save()


        res.send({game: game})

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }


})




module.exports = router
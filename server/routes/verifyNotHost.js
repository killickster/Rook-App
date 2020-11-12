const Game = require("../model/Game")

module.exports = async function(req,res,next){

    try{

        const game = await Game.findOne({host_id: req.user._id})

        if(game){
            return res.status(400).send('HOSTING_ALREADY')
        }
        next()
    }catch(err){
        res.status(400).send(err)
    }
}
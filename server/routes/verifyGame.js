const GameSchema = require("../model/Game")

module.exports = async function(req,res,next){
    const token = req.header('game-token')

    console.log(token)

    if(!token){
        return res.status(401).send('NO_GAME_TOKEN')
    }

    const verified = await GameSchema.findOne({_id: token})



    console.log(verified.host_name)

    try{
        req.game = verified
        next()
    }catch(err){
        res.status(400).send('INVALID_GAME_TOKEN')
    }
}
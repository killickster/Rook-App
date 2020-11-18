const jwt = require('jsonwebtoken')
const User = require('../model/User')


module.exports = async function(req,res,next){
    const token = req.header('auth-token')

    if(!token){
        return res.status(401).send('NO_TOKEN')
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)

        const foundUser = await User.findOne({_id: verified._id})

        req.user = verified
        req.user.name = foundUser.name
        next()
    }catch(err){
        res.status(400).send('INVALID_TOKEN')
    }
}
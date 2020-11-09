const router = require('express').Router()
const User = require('../model/User')
const verify = require('./verifyToken')

router.get('/', verify, async (req,res) => {

    user = await User.findOne({_id: req.user._id})

    console.log(user)

    res.json({posts: {title: 'my first post', description: 'random data you need to logged in for', user: req.user}})
})


module.exports = router
const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation')


//Register
router.post('/register', async (req,res) => {


    //validate data
    const {error} = registerValidation(req.body)

    if(error){
        return res.status(400).send(error.details[0].message)
    }

    //Check if user exists already
    const emailExists = await User.findOne({email: req.body.email})

    console.log(emailExists)

    if(emailExists){
        return res.status(400).send('EMAIL_EXISTS')
    }

    const userNameExists = await User.findOne({name: req.body.name})

    if(userNameExists){
        return res.status(400).send('USERNAME_EXISTS')
    }


    //Hash passwords
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword 
    })
    console.log(user)

    try{
        const savedUser = await user.save()
        res.send({registerd: 'true'})

    }catch(err){
        res.status(400).send(err)
    }
})





//Login
router.post('/login', async (req,res) =>{

    //validate data
    const {error} = loginValidation(req.body)

    if(error){
        return res.status(400).send(error.details[0].message)
    }

    //Check if user exists
    const user = await User.findOne({email: req.body.email})

    if(!user){
        return res.status(400).send('INVALID_EMAIL')
    }

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)

    if(!validPass){
        return res.status(400).send('INVALID_PASSWORD')
    }

    //Create and assign a token
    console.log('logged in')
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1d"})
    return res.header('auth-token', token).send({token: token, name: user.name })

} )


module.exports = router
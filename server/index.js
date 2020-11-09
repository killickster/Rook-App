const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const gameRoute = require('./routes/games/games')

dotenv.config()

//Connect to db
mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true}, ()=> {
    console.log('connected')
})

app.use(express.json())
//Route Middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/games', gameRoute)


app.listen(3000, () => {console.log("Server is up and running")})
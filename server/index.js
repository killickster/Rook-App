const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const http = require('http')
const socketio = require('socket.io')
const server = http.createServer(app)
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200

}

app.use(cors(corsOptions))

const io = socketio(server)

io.on('connection', socket => {
    console.log('New connection')
})

//Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const gameRoute = require('./routes/games/games')
const { isObject } = require('util')

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


server.listen(3000, () => {console.log("Server is up and running")})
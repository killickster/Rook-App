const express = require('express')
const app = express()
var server = require('http').createServer(app)
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const game_socket = require('./routes/sockets/game_socket/game_socket')

const corsOptions = {
  };

app.use(cors(corsOptions))

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

server.listen(3000, () => {console.log("Server is up and running")})


const io = require('socket.io')(server, {
    cors: {
        origin:'http://localhost:4200',
        method:["GET", "POST"]
    }
})


game_socket(io)
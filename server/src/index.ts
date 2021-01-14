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

app.use(express.static(__dirname + '/../dist'))


app.route('/*').get(function(req: any, res: any) {
    return res.sendFile(__dirname + '/../dist/index.html');
});

server.listen(3000, () => {console.log("Server is up and running")})

var url = process.env.SERVER

const io = require('socket.io')(server, {
    cors: {
        origin: url,
        method:["GET", "POST"]
    }
})


game_socket(io)

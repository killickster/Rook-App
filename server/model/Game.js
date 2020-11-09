const mongoose = require('mongoose')
const User = require('./User')

const gameSchema = new mongoose.Schema({
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    players:{
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    },
    numberOfPlayers:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Game', gameSchema)
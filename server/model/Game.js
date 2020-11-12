const mongoose = require('mongoose')
const User = require('./User')

const gameSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    host_name: {
        type: String,
        required: true
    },
    players_id:{
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    },
    playersNames:{
        type: [String],
        required: true
    },
    numberOfPlayers:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Game', gameSchema)
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
    playerNames:{
        type: [String],
        required: false
    },
    numberOfPlayers:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('GameSchema', gameSchema)
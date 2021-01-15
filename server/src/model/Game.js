const mongoose = require('mongoose')
const User = require('./User')

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    },
    finished:{
        type: Boolean,
        required: true
    },
    winners:{
        type: [mongoose.Schema.Types.ObjectId]
    },
    throwOutPoints:{
        type: Boolean,
        required: true
    },
    lastTrick: {
        type: Boolean,
        required: true
    },
    mostCards: {
        type: Boolean,
        require: true
    },
    pointsToWin: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('GameSchema', gameSchema)
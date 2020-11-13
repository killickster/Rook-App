const mongoose = require('mongoose')
const User = require('./User')

const gameSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    players_id:{
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    },
})

module.exports = mongoose.model('Game', gameSchema)
"use strict";
var mongoose = require('mongoose');
var User = require('./User');
var gameSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    host_name: {
        type: String,
        required: true
    },
    players_id: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    },
    playerNames: {
        type: [String],
        required: false
    },
    numberOfPlayers: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('GameSchema', gameSchema);

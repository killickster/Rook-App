"use strict";
var id = 0;
var Player = /** @class */ (function () {
    function Player(id, name) {
        this.name = name;
        this.id = id;
        this.hand = [];
        this.hasPassed = false;
    }
    return Player;
}());
module.exports = Player;

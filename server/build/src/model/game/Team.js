"use strict";
var Team = /** @class */ (function () {
    function Team(players) {
        this.players = players;
        this.score = 0;
        this.bid = 0;
    }
    Team.prototype.getPlayerNames = function () {
        var playerNames = [];
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            playerNames.push(player.name);
        }
        return playerNames;
    };
    Team.prototype.addPointsMade = function (points) {
        if (points > this.bid) {
            this.score += points;
        }
        else {
            this.score -= this.bid;
        }
    };
    Team.prototype.setBid = function (bid) {
        this.bid = bid;
    };
    return Team;
}());
module.exports = Team;

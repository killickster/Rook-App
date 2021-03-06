"use strict";
var Deck = require('./Deck');
var Team = require('./Team');
var Trick = require('./Trick');
var GameStateForPlayer = require('./GameState');
var Game = /** @class */ (function () {
    function Game(game_id) {
        this.bidWinner = null;
        this.numberOfPlayers = 4;
        this.id = game_id;
        this.players = [];
        this.kitty = [];
        this.currentBid = 80;
        this.deck = new Deck();
        this.bidFinished = false;
        this.bidWinner = null;
        this.tricks = [];
        this.team1 = [];
        this.team2 = [];
        this.team1Bid = 0;
        this.team2Bid = 0;
        this.waitingForPlayers = true;
        this.gameStates = {};
    }
    Game.prototype.addPlayer = function (player) {
        console.log('adding player');
        this.players.push(player);
        this.gameStates[player.id] = new GameStateForPlayer(player.id, this.game_id);
    };
    Game.prototype.formTeams = function () {
        var selectedIndicies = [];
        while (selectedIndicies.length < this.players.length) {
            var index = Math.floor(Math.random() * this.players.length);
            var found = false;
            for (i = 0; i < selectedIndicies.length; i++) {
                if (selectedIndicies[i] == index) {
                    found = true;
                }
            }
            if (!found) {
                selectedIndicies.push(index);
            }
        }
        var i = 0;
        for (var _i = 0, selectedIndicies_1 = selectedIndicies; _i < selectedIndicies_1.length; _i++) {
            var item = selectedIndicies_1[_i];
            if (i < 2) {
                this.team1.push(this.players[item]);
            }
            else {
                this.team2.push(this.players[item]);
            }
            i++;
        }
        this.waitingForPlayers = false;
    };
    Game.prototype.deal = function (numberInTheKitty) {
        for (var i = 0; i < 5; i++) {
            this.deck.shuffle();
        }
        var indiciesToSelectForKitty = [];
        while (indiciesToSelectForKitty.length !== numberInTheKitty) {
            var value = Math.floor(Math.random() * this.deck.cards.length) + 1;
            if (!indiciesToSelectForKitty.includes(value)) {
                indiciesToSelectForKitty.push(value);
            }
        }
        if ((this.deck.cards.length - numberInTheKitty) % this.players.length !== 0) {
            throw Error("Not a valid kitty size for this number of players");
        }
        var i = 0;
        var playerTracker = 0;
        while (this.deck.cards.length !== 0) {
            var card = this.deck.cards.pop();
            if (indiciesToSelectForKitty.includes(i)) {
                this.kitty.push(card);
            }
            else {
                this.players[playerTracker % this.players.length].hand.push(card);
                playerTracker++;
            }
            i++;
        }
        this.bidderIndex = 0;
        this.currentBidder = this.getCurrentBidder(this.bidderIndex);
    };
    Game.prototype.getCurrentBidder = function (index) {
        var currentBidder;
        if (index == 0) {
            currentBidder = this.team1[0];
        }
        else if (index == 1) {
            currentBidder = this.team2[0];
        }
        else if (index == 2) {
            currentBidder = this.team1[1];
        }
        else if (index == 3) {
            currentBidder = this.team2[1];
        }
        if (index == this.numberOfPlayers - 1) {
            this.bidderIndex = 0;
        }
        else {
            this.bidderIndex += 1;
        }
        return currentBidder;
    };
    Game.prototype.submitBid = function (playerId, bid) {
        var passed = false;
        console.log('submitting bid');
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].id === playerId) {
                if (bid > this.currentBid && bid % 5 == 0) {
                    this.currentBid = bid;
                }
                else {
                    this.players[i].hasPassed = true;
                    passed = true;
                }
            }
        }
        var numberOfPlayersWhoHavePassed = 0;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.hasPassed) {
                numberOfPlayersWhoHavePassed++;
            }
        }
        if (numberOfPlayersWhoHavePassed === this.players.length - 1) {
            this.bidFinished = true;
            this.bidWinner = this.completeBid();
            return this.bidWinner;
        }
        else {
            this.currentBidder = this.getCurrentBidder(this.bidderIndex);
            while (this.currentBidder.hasPassed) {
                this.currentBidder = this.getCurrentBidder(this.bidderIndex);
            }
        }
    };
    Game.prototype.completeBid = function () {
        for (var i = 0; i < this.players.length; i++) {
            var bidWinner;
            if (this.players[i].hasPassed !== true) {
                if (this.team1.includes(this.players[i])) {
                    this.team1bid = this.currentBid;
                    bidWinner = i;
                }
                if (this.team2.includes(this.players[i])) {
                    this.team2bid = this.currentBid;
                    bidWinner = i;
                }
            }
        }
        return this.players[bidWinner];
    };
    Game.prototype.decideTrump = function (color) {
        this.color = color;
        this.deck.addTrump(color);
    };
    Game.prototype.beginTrick = function (player) {
        this.tricks.push(new Trick(this.players.length, this.color, player));
    };
    Game.prototype.play = function (id, card) {
        this.tricks[this.tricks.length - 1].submitPlay(id, card);
    };
    Game.prototype.getGameForDisplay = function () {
        var players = [];
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            players.push(player);
        }
        return {
            id: game.id,
            players: players,
            numberOfPlayersRequired: this.numberOfPlayers
        };
    };
    return Game;
}());
module.exports = Game;

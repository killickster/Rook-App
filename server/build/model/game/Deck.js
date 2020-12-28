"use strict";
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var i = 1; i <= 14; i++) {
            this.cards.push(new Card('red', i, this.getPoints(i)));
        }
        for (var i = 1; i <= 14; i++) {
            this.cards.push(new Card('yellow', i, this.getPoints(i)));
        }
        for (var i = 1; i <= 14; i++) {
            this.cards.push(new Card('green', i, this.getPoints(i)));
        }
        for (var i = 1; i <= 14; i++) {
            this.cards.push(new Card('black', i, this.getPoints(i)));
        }
        //Add rook card
        this.rook = new Card('blank', 0);
        this.cards.push(this.rook);
    }
    Deck.prototype.getPoints = function (number) {
        var points = 0;
        if (number === 1) {
            points = 15;
        }
        else if (number === 10 || number === 14) {
            points = 10;
        }
        else if (number === 5) {
            points = 5;
        }
        else {
            points = 0;
        }
        return points;
    };
    Deck.prototype.shuffle = function () {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    };
    Deck.prototype.addTrump = function (color) {
        this.rook.color = color;
    };
    return Deck;
}());
var Card = /** @class */ (function () {
    function Card(color, number, points) {
        this.color = color;
        this.value = number;
        this.points = points;
    }
    return Card;
}());
module.exports = Deck;

class Deck{

    constructor(){

        this.cards = []

        for(var i = 1; i <= 14; i++){
            this.cards.push(new Card('red', i))
        }

        for(var i = 1; i <= 14; i++){
            this.cards.push(new Card('yellow', i))
        }

        for(var i = 1; i <= 14; i++){
            this.cards.push(new Card('green', i))
        }

        for(var i = 1; i <= 14; i++){
            this.cards.push(new Card('black', i))
        }

        //Add rook card
        this.rook = new Card('blank', 0)
        this.cards.push(this.rook);
    }

    shuffle(){
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

    }

    addTrump(color){
        this.rook.color = color
    }

}

class Card{
    constructor(color, number){
        this.color = color
        this.number = number
    }
}

module.exports = Deck;

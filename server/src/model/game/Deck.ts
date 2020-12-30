export class Deck{

    public cards: Card[]
    public rook: Card

    constructor(){

        this.cards = []

        for(var i = 1; i <= 14; i++){

            if(i === 1){
                this.cards.push(new Card(Color.RED, i, this.getPoints(i), 15, 'flipped', false, false))
            }else{
                this.cards.push(new Card(Color.RED, i, this.getPoints(i), i, 'flipped', false, false))
            }

        }

        for(var i = 1; i <= 14; i++){
            if(i === 1){
                this.cards.push(new Card(Color.YELLOW, i, this.getPoints(i), 15, 'flipped', false, false))
            }else{
                this.cards.push(new Card(Color.YELLOW, i, this.getPoints(i), i, 'flipped', false, false))
            }
        }

        for(var i = 1; i <= 14; i++){
            if(i === 1){
                this.cards.push(new Card(Color.GREEN, i, this.getPoints(i), 15, 'flipped', false, false))
            }else{
                this.cards.push(new Card(Color.GREEN, i, this.getPoints(i), i, 'flipped', false, false))
            }
        }

        for(var i = 1; i <= 14; i++){
            if(i === 1){
                this.cards.push(new Card(Color.BLACK, i, this.getPoints(i), 15, 'flipped', false, false))
            }else{
                this.cards.push(new Card(Color.BLACK, i, this.getPoints(i), i, 'flipped', false, false))
            }
        }

        //Add rook card
        this.rook = new Card(Color.UNDETERMINED, 0, 20, 0, 'flipped', false, false)
        this.cards.push(this.rook);
    }

    getPoints(value: number){

        var points = 0
        if(value === 1){
            points = 15
        }else if(value === 10 || value === 14){
            points = 10
        }else if(value === 5){
            points = 5
        }else{
            points = 0
        }

        return points
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

    addTrump(color: Color){
        this.rook.color = color
    }

}


export enum Color {RED, BLACK, YELLOW, GREEN, UNDETERMINED}

export class Card{
    constructor(public color: Color, public value: number, public points: number, public power: number, public state: 'face' | 'flipped', public exchange: boolean, public kitty: boolean){
    }
}

export function shuffleAndDeal(deck: Deck, numberInKitty: number, numberOfPlayers: number){

    var kitty: Card[] = []
    var hands: Card[][] = []

    for(var i = 0; i < numberOfPlayers; i++){
        hands.push([])
    }

    for(var i = 0; i < 5; i++){
        deck.shuffle()
    }

    let indiciesToSelectForKitty: number[] = []

    while(indiciesToSelectForKitty.length !== numberInKitty){
        var value = Math.floor(Math.random() * deck.cards.length) + 1 

        if(!indiciesToSelectForKitty.includes(value)){
            indiciesToSelectForKitty.push(value)
        }
    }

    if((deck.cards.length-numberInKitty)% numberOfPlayers !==0){
        throw Error("Not a valid kitty size for this number of players")
    }

    var i = 0
    var playerTracker = 0;
    while(deck.cards.length !== 0){
        const card = deck.cards.pop()
        if(card){
            if(indiciesToSelectForKitty.includes(i)){
                kitty.push(card)
            }else{
                hands[playerTracker%numberOfPlayers].push(card)
                playerTracker++;
            }

            i++
        }


    }

    return {'kitty': kitty, 'hands': hands}


}
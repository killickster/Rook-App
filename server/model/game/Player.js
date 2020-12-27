
var id = 0

class Player{
    constructor(id, name){
        this.name = name
        this.id = id
        this.hand = []
        this.hasPassed = false;
    }


    sortHand(){
        var red = []
        var green = []
        var yellow = []
        var black = []

        var rook = null

        for(let card of this.hand){

            if(card.color === 'red'){
                red.push(card)
            }else if(card.color === 'green'){
                green.push(card)
            }else if(card.color === 'yellow'){
                yellow.push(card)
            }else if(card.color === 'black'){
                black.push(card)
            }else if(card.color === 'blank'){
                rook = card
            }
        }


        red = this.sort(red)
        black = this.sort(black)
        green= this.sort(green)
        yellow = this.sort(yellow)

        this.hand = red.concat(black).concat(green).concat(yellow)

        if(rook){
            this.hand.push(rook)
        }

    }

    sort(cards){
        return cards.sort((a,b) => {
            if(a.value === 1){
                return -1
            }else if(b.value === 1){
                return 1 
            }else{
                return b.value-a.value
            }

        })
    }


}

module.exports = Player
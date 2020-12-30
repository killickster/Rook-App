class Trick{
    constructor(numberOfPlayers, trump, firstPlayer){
        this.currentPlayer = firstPlayer
        this.numberOfPlayers = numberOfPlayers
        this.trump = trump
        this.isTrumped = false;
        this.currentWinner
        this.tracker = 0;
        this.trickCompleted = false
    }

    submitPlay(id, card){
        if(this.plays.length === 0){
            this.color = card.color
            this.currentWinner = this.tracker;
        }


        if(this.isTrumped){
            if(card.color.localeCompare(this.trump)){
                if(this.plays[this.currentWinner].card.number < card.number){
                    this.currentWinner = this.tracker
                }
            }
        }else{
            if(card.color.localeCompare(this.trump)){
                this.isTrumped = true;
                this.currentWinner = this.tracker
            }else if(card.color.localeCompare(this.color)){
                if(this.plays[this.currentWinner].card.number < card.number){
                    this.currentWinner = this.tracker
                }
            }
        }


        this.plays.push({id: id, card: card})

        this.tracker++

        if(this.tracker === this.numberOfPlayers-1){
            this.trickCompleted = true
        }
    }

}

module.exports = Trick

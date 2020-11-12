class Team{
    constructor(players){
        this.players = players
        this.score = 0;
        this.bid = 0;
    }

    addPointsMade(points){
        if(points > this.bid){
            this.score += points
        }else{
            this.score -= this.bid
        }
    }

    setBid(bid){
        this.bid = bid
    }
}

module.exports = Team
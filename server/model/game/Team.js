class Team{
    constructor(players){
        this.players = players
        this.score = 0;
        this.bid = 0;
    }

    getPlayerNames(){
        var playerNames = []
        for(let player of players){
            playerNames.push(player.name)
        }

        return playerNames
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
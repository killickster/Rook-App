
var id = 0

class Player{
    constructor(name){
        this.name = name
        this.id = id++
        this.hand = []
        this.hasPassed = false;
    }


}

module.exports = Player
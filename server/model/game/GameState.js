class GameStateForPlayer{
    constructor(player_id, game_id, player_names, bidding, player_turn, teammate){
        this.game_id = game_id
        this.player_id = player_id
        this.player_ids = []
        this.bidding = true
        this.teammate = teammate
        this.player_turn = player_turn
        this.bidWinner = null
        this.hand = null 
        this.kitty = []
        this.trick = null
        this.currentLeader = null
        this.hands = {}
        this.player_names = {}
    }
}
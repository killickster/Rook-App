
import {Pipe, PipeTransform} from '@angular/core'
import {Color} from '../services/models/color.model'


@Pipe({
    name: 'bidDisplay'
})


export class BidDisplayPipe implements PipeTransform{
    

    transform(bidWinner: any, index: number, players: any[]){
        console.log('hello')
        console.log(players[(bidWinner-index)%players.length])
        return players[(bidWinner-index+4)%players.length]

    }
}


import {Pipe, PipeTransform} from '@angular/core'
import {Color} from '../services/models/color.model'


@Pipe({
    name: 'bidDisplay',
    pure: false
})


export class BidDisplayPipe implements PipeTransform{
    

    transform(bidWinner: any, index: number, players: any[]){
        return players[(bidWinner-index+players.length)%players.length]

    }
}

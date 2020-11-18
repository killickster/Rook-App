import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import {Injectable} from '@angular/core'
import {GamesService} from './games.service'
import {take, exhaustMap} from 'rxjs/operators'

@Injectable()

export class GameInterceptor implements HttpInterceptor{

    constructor(private gameService: GamesService){

    }


    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.gameService.game.pipe(take(1), exhaustMap(game => {

            if(!game){
                console.log('game is not initalized')
                return next.handle(req)
            }else{

                console.log('game is inatlized')
                console.log(game)

                console.log(req.headers.get('auth-token'))

                const modifiedReq = req.clone({headers: new HttpHeaders({'auth-token': req.headers.get('auth-token'), 'game-token': game.id,})})
                return next.handle(modifiedReq)
            }

        }))

    }
}
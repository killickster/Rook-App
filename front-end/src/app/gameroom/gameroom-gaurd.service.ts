import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs';
import {GamesService} from '../services/games.service'
import { tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameroomGaurdService implements CanActivate{

  constructor( private router: Router, private gameService: GamesService) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{

    return this.gameService.game.pipe(map(user => {
      return !!user
    }), tap(partOfGame => {
      console.log(partOfGame)

      if(!partOfGame){
        this.router.navigate(['/games'])
      }
    }))

  }

}

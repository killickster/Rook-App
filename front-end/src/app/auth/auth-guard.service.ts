import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import { Observable, onErrorResumeNext } from 'rxjs';
import { tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{

    return this.authService.user.pipe(map(user => {
      return !!user
    }), tap(isAuth => {

      if(isAuth){
        return true
      }else{
        this.router.navigate(['/login'])
      }

    }))

  }

}

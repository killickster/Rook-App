import {Injectable} from '@angular/core'
import { HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http'
import { AuthService } from './auth.service'
import {take, exhaustMap} from 'rxjs/operators'


@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if(!user){
                return next.handle(req)
            }else{


                const modifiedReq = req.clone({headers: new HttpHeaders({'auth-token': user.token})})
                return next.handle(modifiedReq)
            }

        }))

    }
}
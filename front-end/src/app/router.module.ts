import { ngModuleJitUrl } from '@angular/compiler'
import {Routes, RouterModule} from '@angular/router'
import {GamesComponent} from './games/games.component'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './auth/register/register.component'
import { LoginComponent } from './auth/login/login.component'
import {AuthGuardService} from './auth/auth-guard.service'
import { CreateGameComponent } from './games/create-game/create-game.component'
import { GameroomComponent } from './gameroom/gameroom.component'
import {GameroomGaurdService} from './gameroom/gameroom-gaurd.service'






const appRoutes: Routes = [
    {path: '', redirectTo: 'games', pathMatch: 'full'},
    {path: 'games', component: GamesComponent, canActivate: [AuthGuardService], children: [
        {path: 'create', component: CreateGameComponent},
    ]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'gameroom/:id', component: GameroomComponent, canActivate: [AuthGuardService, GameroomGaurdService]}

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})



export class RoutingModule{}

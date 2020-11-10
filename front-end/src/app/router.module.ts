import { ngModuleJitUrl } from '@angular/compiler'
import {Routes, RouterModule} from '@angular/router'
import {GamesComponent} from './games/games.component'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './auth/register/register.component'
import { LoginComponent } from './auth/login/login.component'






const appRoutes: Routes = [
    {path: '', redirectTo: 'games', pathMatch: 'full'},
    {path: 'games', component: GamesComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
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
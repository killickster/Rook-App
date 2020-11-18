import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptorService} from './auth/auth-interceptor.service'
import {GameInterceptor} from './services/game-interceptor.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import {DisplayPipe} from './games/game-display.pipe'
import {RoutingModule} from './router.module';
import { RegisterComponent} from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateGameComponent } from './games/create-game/create-game.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    DisplayPipe,
    RegisterComponent,
    LoginComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass: GameInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

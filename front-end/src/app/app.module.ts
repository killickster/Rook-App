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
import { CreateGameComponent } from './games/create-game/create-game.component';
import { GameroomComponent } from './gameroom/gameroom.component'
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input'
import { BidComponent } from './gameroom/bid/bid.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RookCardComponent } from './gameroom/rook-card/rook-card.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    DisplayPipe,
    RegisterComponent,
    LoginComponent,
    CreateGameComponent,
    GameroomComponent,
    BidComponent,
    RookCardComponent
  ],
  entryComponents:[
    BidComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass: GameInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

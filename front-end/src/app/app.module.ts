import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import {DisplayPipe} from './games/game-display.pipe'
import {RoutingModule} from './router.module';
import { RegisterComponent} from './auth/register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    DisplayPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

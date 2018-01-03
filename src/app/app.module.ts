import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './components/material.module';

import { PlayersService } from './services/players.service';
import { MonstersService } from './services/monsters.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    MaterialModule,
  ],
  providers: [
    PlayersService,
    MonstersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

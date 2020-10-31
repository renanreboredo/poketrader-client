import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, GenerationsComponent, PokemonListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
})
export class AppModule {}

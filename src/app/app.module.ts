import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, GenerationsComponent, PokemonListComponent, TradeHistoryComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
})
export class AppModule {}

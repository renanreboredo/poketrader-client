import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

export interface Pokemon {
  id: number;
  name: string;
  isDefault: boolean;
  baseExperience: number;
  sprite: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PoketraderApiService {
  private BASE_API_URL = 'https://api-poketrader.herokuapp.com';
  user = this.authService.currentUserValue;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.user.access_token
    })
  };


  constructor(private http: HttpClient, private authService: AuthService) {}

  public getGenerations() {
    return this.http.get(`${this.BASE_API_URL}/trade/generation`, this.httpOptions);
  }

  public getPokemonsFromGeneration(id: number) {
    return this.http.get(`${this.BASE_API_URL}/trade/generation/${id}/pokemon`, this.httpOptions);
  }

  public isFairTrade(
    pokemonsFromPlayer1: Pokemon[],
    pokemonsFromPlayer2: Pokemon[]
  ) {
    return this.http.post(`${this.BASE_API_URL}/trade/fair`, {
      pokemonsFromPlayer1,
      pokemonsFromPlayer2,
    }, this.httpOptions);
  }

  public trade(
    pokemonsFromPlayer1: Pokemon[],
    pokemonsFromPlayer2: Pokemon[],
    userID: string
  ) {
    return this.http.post(`${this.BASE_API_URL}/trade`, {
      pokemonsFromPlayer1,
      pokemonsFromPlayer2,
      userID,
    }, this.httpOptions);
  }

  public tradeHistory(userID: string) {
    return this.http.get(`${this.BASE_API_URL}/trade/${userID}`);
  }
}

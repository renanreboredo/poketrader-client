import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  public getGenerations() {
    return this.http.get(`${this.BASE_API_URL}/trade/generation`);
  }

  public getPokemonsFromGeneration(id: number) {
    return this.http.get(`${this.BASE_API_URL}/trade/generation/${id}/pokemon`);
  }

  public isFairTrade(
    pokemonsFromPlayer1: Pokemon[],
    pokemonsFromPlayer2: Pokemon[]
  ) {
    return this.http.post(`${this.BASE_API_URL}/trade/fair`, {
      pokemonsFromPlayer1,
      pokemonsFromPlayer2,
    });
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
    });
  }

  public tradeHistory(userID: string) {
    return this.http.get(`${this.BASE_API_URL}/trade/${userID}`);
  }
}

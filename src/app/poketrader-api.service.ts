import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PoketraderApiService {
  generations = [
    {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
    {
      name: 'generation-ii',
      url: 'https://pokeapi.co/api/v2/generation/2/',
    },
    {
      name: 'generation-iii',
      url: 'https://pokeapi.co/api/v2/generation/3/',
    },
    {
      name: 'generation-iv',
      url: 'https://pokeapi.co/api/v2/generation/4/',
    },
    {
      name: 'generation-v',
      url: 'https://pokeapi.co/api/v2/generation/5/',
    },
    {
      name: 'generation-vi',
      url: 'https://pokeapi.co/api/v2/generation/6/',
    },
    {
      name: 'generation-vii',
      url: 'https://pokeapi.co/api/v2/generation/7/',
    },
    {
      name: 'generation-viii',
      url: 'https://pokeapi.co/api/v2/generation/8/',
    },
  ];

  constructor(private http: HttpClient) {}

  getGenerations() {
    return this.generations;
    /* this.http.get(''); */
  }
}

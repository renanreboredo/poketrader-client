import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoketraderApiService } from '../poketrader-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons = [];

  id: number;

  selectedPokemonsP1 = [];
  selectedPokemonsP2 = [];

  constructor(
    private route: ActivatedRoute,
    private pokeapiService: PoketraderApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.pokeapiService
        .getPokemonsFromGeneration(this.id)
        .subscribe((res: any) => (this.pokemons = res.data));
    });
  }

  addToPlayer(player: number, pokemon) {
    if (player === 1) {
      this.selectedPokemonsP1 = [...this.selectedPokemonsP1, pokemon];
    } else {
      this.selectedPokemonsP2 = [...this.selectedPokemonsP2, pokemon];
    }
  }
}
